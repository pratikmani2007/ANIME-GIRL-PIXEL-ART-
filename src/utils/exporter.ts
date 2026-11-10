export async function downloadCharacterPNG(
  svgElement: SVGSVGElement,
  characterName: string = 'pixel_waifu'
): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      const clonedSvg = svgElement.cloneNode(true) as SVGSVGElement;
      clonedSvg.setAttribute('width', '768');
      clonedSvg.setAttribute('height', '1152');

      const serializer = new XMLSerializer();
      const svgString = serializer.serializeToString(clonedSvg);
      const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);

      const img = new Image();
      img.onload = () => {
        try {
          const canvas = document.createElement('canvas');
          canvas.width = 768;
          canvas.height = 1152;
          const ctx = canvas.getContext('2d');

          if (!ctx) {
            URL.revokeObjectURL(url);
            reject(new Error('Failed to create canvas context'));
            return;
          }

          // Force pixelated crisp scaling
          ctx.imageSmoothingEnabled = false;
          (ctx as any).webkitImageSmoothingEnabled = false;
          (ctx as any).mozImageSmoothingEnabled = false;

          ctx.drawImage(img, 0, 0, 768, 1152);
          URL.revokeObjectURL(url);

          canvas.toBlob((blob) => {
            if (!blob) {
              reject(new Error('Canvas toBlob failed'));
              return;
            }
            const downloadUrl = URL.createObjectURL(blob);
            const anchor = document.createElement('a');
            const safeName = (characterName.trim() || 'waifu')
              .toLowerCase()
              .replace(/[^a-z0-9]/g, '_');
            anchor.download = `pixel_${safeName}_anime_girl.png`;
            anchor.href = downloadUrl;
            document.body.appendChild(anchor);
            anchor.click();
            document.body.removeChild(anchor);
            setTimeout(() => URL.revokeObjectURL(downloadUrl), 1000);
            resolve();
          }, 'image/png');
        } catch (err) {
          URL.revokeObjectURL(url);
          reject(err);
        }
      };

      img.onerror = (err) => {
        URL.revokeObjectURL(url);
        reject(err);
      };

      img.src = url;
    } catch (err) {
      reject(err);
    }
  });
}

export function downloadCharacterSVG(
  svgElement: SVGSVGElement,
  characterName: string = 'pixel_waifu'
): void {
  try {
    const clonedSvg = svgElement.cloneNode(true) as SVGSVGElement;
    clonedSvg.setAttribute('width', '768');
    clonedSvg.setAttribute('height', '1152');

    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(clonedSvg);
    const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);

    const safeName = (characterName.trim() || 'waifu')
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '_');
    const anchor = document.createElement('a');
    anchor.download = `pixel_${safeName}_anime_girl.svg`;
    anchor.href = url;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  } catch (err) {
    console.error('Error downloading SVG:', err);
  }
}
