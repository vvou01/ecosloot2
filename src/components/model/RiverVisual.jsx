import React, { useEffect, useMemo, useState } from 'react';

const BASE_IMAGE_SRC = 'https://media.base44.com/images/public/6984647797357b284bc40672/a04fea65c_base.png';

const PLANT_LAYERS = [
  { key: 'ondergedoken', steps: [1, 2, 4, 5, 8, 10, 15, 20, 30, 40, 50, 60, 70, 80, 90, 100] },
  { key: 'drijvend', steps: [1, 2, 4, 5, 8, 10, 15, 20, 30, 40, 50, 60, 70, 80, 90, 100] },
  { key: 'flab', steps: [1, 2, 4, 5, 8, 10, 15, 20, 30, 40, 50, 60, 70, 80, 90, 100] },
  { key: 'kroos', steps: [1, 2, 4, 5, 10, 15, 20, 30, 40, 50, 60, 70, 80, 90, 100] },
  { key: 'emergent', steps: [1, 2, 4, 5, 8, 10, 15, 20, 30, 40, 50, 60, 70, 80, 90, 100] },
];

function getStepForValue(value, steps) {
  const normalized = Math.min(100, Math.max(0, Math.round(Number(value) || 0)));
  const minStep = steps[0];
  if (normalized < minStep) return null;
  let selectedStep = null;
  for (const step of steps) {
    if (step <= normalized) selectedStep = step;
  }
  return selectedStep;
}

function getOverlaySrc(key, step) {
  return `/assets/overlays/${key}_${step}.png`;
}

function preloadImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    let settled = false;
    const finish = (didLoad) => {
      if (settled) return;
      settled = true;
      resolve({ src, didLoad });
    };
    img.onload = () => {
      if (typeof img.decode === 'function') {
        img.decode().catch(() => undefined).finally(() => finish(true));
      } else {
        finish(true);
      }
    };
    img.onerror = () => finish(false);
    img.src = src;
    if (img.complete && img.naturalWidth > 0) finish(true);
  });
}



const loadingStyle = {
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(135deg, #c8e6f0 0%, #a8d4e8 50%, #c8e6f0 100%)',
};

export default function RiverVisual({ values }) {
  const [loadedImages, setLoadedImages] = useState(() => new Set());
  const [isReady, setIsReady] = useState(false);
  const [aspectRatio, setAspectRatio] = useState(null);

  useEffect(() => {
    let isCancelled = false;
    const overlaySources = PLANT_LAYERS.flatMap(({ key, steps }) =>
      steps.map((step) => getOverlaySrc(key, step))
    );
    Promise.allSettled([preloadImage(BASE_IMAGE_SRC), ...overlaySources.map(preloadImage)]).then((results) => {
      if (isCancelled) return;
      const loaded = new Set();
      for (const result of results) {
        if (result.status === 'fulfilled' && result.value.didLoad) {
          loaded.add(result.value.src);
        }
      }
      setLoadedImages(loaded);
      setIsReady(true);
    });

    // Detect base image natural dimensions
    const img = new Image();
    img.onload = () => {
      if (!isCancelled && img.naturalWidth && img.naturalHeight) {
        setAspectRatio(img.naturalWidth / img.naturalHeight);
      }
    };
    img.src = BASE_IMAGE_SRC;

    return () => { isCancelled = true; };
  }, []);

  // For each layer, compute which step src is currently active
  const activeSteps = useMemo(() => {
    const result = {};
    for (const layer of PLANT_LAYERS) {
      const step = getStepForValue(values?.[layer.key], layer.steps);
      result[layer.key] = step ? getOverlaySrc(layer.key, step) : null;
    }
    return result;
  }, [values]);

  const imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'fill',
    display: 'block',
  };

  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    minHeight: 0,
    overflow: 'hidden',
    background: '#c8e6f0',
    pointerEvents: 'none',
    userSelect: 'none',
    display: 'block',
    margin: 0,
    padding: 0,
    border: 'none',
  };

  return (
    <div style={containerStyle} aria-label="Visualisatie plantenbedekking">
      {isReady ? (
        <>
          <img style={{ ...imgStyle, zIndex: 0 }} src={BASE_IMAGE_SRC} alt="Basisafbeelding van de watergang" />
          {PLANT_LAYERS.map((layer, layerIndex) =>
            layer.steps.map((step) => {
              const src = getOverlaySrc(layer.key, step);
              if (!loadedImages.has(src)) return null;
              const isActive = activeSteps[layer.key] === src;
              const maxOpacity = layer.key === 'kroos' ? 0.90 : layer.key === 'flab' ? 0.50 : 1;
              return (
                <img
                  key={`${layer.key}-${step}`}
                  style={{
                    ...imgStyle,
                    opacity: isActive ? maxOpacity : 0,
                    zIndex: layerIndex + 1,
                    transition: 'opacity 0.3s ease',
                    willChange: 'opacity',
                  }}
                  src={src}
                  alt=""
                  aria-hidden="true"
                />
              );
            })
          )}
        </>
      ) : (
        <div style={loadingStyle} aria-hidden="true" />
      )}
    </div>
  );
}