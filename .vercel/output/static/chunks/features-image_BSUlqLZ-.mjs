const featureImage = new Proxy({"src":"/_astro/features-image.BEGIe8fA.avif","width":4375,"height":2369,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/salud/OneDrive/Documents/GitHub/MedicService24-7/src/images/features-image.avif";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("C:/Users/salud/OneDrive/Documents/GitHub/MedicService24-7/src/images/features-image.avif");
							return target[name];
						}
					});

export { featureImage as f };
