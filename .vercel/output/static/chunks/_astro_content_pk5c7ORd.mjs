import pLimit from 'p-limit';
import { A as AstroError, U as UnknownContentCollectionError, p as prependForwardSlash } from './astro/assets-service_BnZdKgCO.mjs';
import { a as createComponent, j as renderUniqueStylesheet, k as renderScriptElement, l as createHeadAndContent, b as renderTemplate, d as renderComponent, u as unescapeHTML } from './astro/server_Cs1tdnfA.mjs';
import 'kleur/colors';

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://screwfast.uk", "ASSETS_PREFIX": undefined}, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/en/post-1.md": () => import('./post-1_CBeJuLLj.mjs'),"/src/content/blog/en/post-2.md": () => import('./post-2_Cs7lkmEm.mjs'),"/src/content/blog/en/post-3.md": () => import('./post-3_DiWuNjsD.mjs'),"/src/content/blog/fr/post-1.md": () => import('./post-1_C6hVF2mC.mjs'),"/src/content/blog/fr/post-2.md": () => import('./post-2_DK9WzXM2.mjs'),"/src/content/blog/fr/post-3.md": () => import('./post-3_CHC64Dc8.mjs'),"/src/content/docs/advanced/technical-specifications.mdx": () => import('./technical-specifications_CPlJW9Od.mjs'),"/src/content/docs/construction/custom-solutions.mdx": () => import('./custom-solutions_DSqkjyDh.mjs'),"/src/content/docs/construction/project-planning.mdx": () => import('./project-planning_WrviRnLl.mjs'),"/src/content/docs/construction/safety.mdx": () => import('./safety_CPA5opYN.mjs'),"/src/content/docs/construction/service-overview.mdx": () => import('./service-overview_BXwl4RHI.mjs'),"/src/content/docs/de/guides/first-project-checklist.mdx": () => import('./first-project-checklist_D6dhgA2w.mjs'),"/src/content/docs/de/guides/getting-started.mdx": () => import('./getting-started_BcP5dKlr.mjs'),"/src/content/docs/de/guides/intro.mdx": () => import('./intro_CgHKtrgm.mjs'),"/src/content/docs/de/welcome-to-docs.mdx": () => import('./welcome-to-docs_25qbL9ba.mjs'),"/src/content/docs/es/guides/first-project-checklist.mdx": () => import('./first-project-checklist_By8Sz8CB.mjs'),"/src/content/docs/es/guides/getting-started.mdx": () => import('./getting-started_BCXFQR2S.mjs'),"/src/content/docs/es/guides/intro.mdx": () => import('./intro_ANwmzvyh.mjs'),"/src/content/docs/es/welcome-to-docs.mdx": () => import('./welcome-to-docs_2xM8MaVY.mjs'),"/src/content/docs/fa/guides/first-project-checklist.mdx": () => import('./first-project-checklist_Bqj8dwsi.mjs'),"/src/content/docs/fa/guides/getting-started.mdx": () => import('./getting-started_BUQaCKNw.mjs'),"/src/content/docs/fa/guides/intro.mdx": () => import('./intro_4OJAl2Ez.mjs'),"/src/content/docs/fa/welcome-to-docs.mdx": () => import('./welcome-to-docs_DBRSrpCv.mjs'),"/src/content/docs/fr/guides/first-project-checklist.mdx": () => import('./first-project-checklist_BIt4Ols_.mjs'),"/src/content/docs/fr/guides/getting-started.mdx": () => import('./getting-started_Cbnhh9ZG.mjs'),"/src/content/docs/fr/guides/intro.mdx": () => import('./intro_DNysSgvs.mjs'),"/src/content/docs/fr/welcome-to-docs.mdx": () => import('./welcome-to-docs_ByrhnKLu.mjs'),"/src/content/docs/guides/first-project-checklist.mdx": () => import('./first-project-checklist_CL6XKfTx.mjs'),"/src/content/docs/guides/getting-started.mdx": () => import('./getting-started_JfLF_amc.mjs'),"/src/content/docs/guides/intro.mdx": () => import('./intro_Cbc0kGf6.mjs'),"/src/content/docs/ja/guides/first-project-checklist.mdx": () => import('./first-project-checklist_VgHSJs5D.mjs'),"/src/content/docs/ja/guides/getting-started.mdx": () => import('./getting-started_BbJOGCUu.mjs'),"/src/content/docs/ja/guides/intro.mdx": () => import('./intro_aEqJ8DrC.mjs'),"/src/content/docs/ja/welcome-to-docs.mdx": () => import('./welcome-to-docs_4RAXen_p.mjs'),"/src/content/docs/tools/equipment-care.mdx": () => import('./equipment-care_DGg__k8x.mjs'),"/src/content/docs/tools/tool-guides.mdx": () => import('./tool-guides_CM30bCd_.mjs'),"/src/content/docs/welcome-to-docs.mdx": () => import('./welcome-to-docs_DoRn5Jpm.mjs'),"/src/content/docs/zh-cn/guides/first-project-checklist.mdx": () => import('./first-project-checklist_uK7sfnx-.mjs'),"/src/content/docs/zh-cn/guides/getting-started.mdx": () => import('./getting-started_BugPwcos.mjs'),"/src/content/docs/zh-cn/guides/intro.mdx": () => import('./intro_BEGurb6i.mjs'),"/src/content/docs/zh-cn/welcome-to-docs.mdx": () => import('./welcome-to-docs_BuClsRwX.mjs'),"/src/content/insights/insight-1.md": () => import('./insight-1_BSYk3mSr.mjs'),"/src/content/insights/insight-2.md": () => import('./insight-2_bAucTVKM.mjs'),"/src/content/insights/insight-3.md": () => import('./insight-3_CaWIANzI.mjs'),"/src/content/products/a765.md": () => import('./a765__Sx0B_zo.mjs'),"/src/content/products/b203.md": () => import('./b203_Di6slJVz.mjs'),"/src/content/products/f303.md": () => import('./f303_cQobDcEq.mjs'),"/src/content/products/t845.md": () => import('./t845_B3IMobhQ.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"insights":{"type":"content","entries":{"insight-1":"/src/content/insights/insight-1.md","insight-2":"/src/content/insights/insight-2.md","insight-3":"/src/content/insights/insight-3.md"}},"products":{"type":"content","entries":{"b203":"/src/content/products/b203.md","a765":"/src/content/products/a765.md","t845":"/src/content/products/t845.md","f303":"/src/content/products/f303.md"}},"docs":{"type":"content","entries":{"welcome-to-docs":"/src/content/docs/welcome-to-docs.mdx","construction/custom-solutions":"/src/content/docs/construction/custom-solutions.mdx","construction/safety":"/src/content/docs/construction/safety.mdx","construction/service-overview":"/src/content/docs/construction/service-overview.mdx","construction/project-planning":"/src/content/docs/construction/project-planning.mdx","advanced/technical-specifications":"/src/content/docs/advanced/technical-specifications.mdx","de/welcome-to-docs":"/src/content/docs/de/welcome-to-docs.mdx","es/welcome-to-docs":"/src/content/docs/es/welcome-to-docs.mdx","fr/welcome-to-docs":"/src/content/docs/fr/welcome-to-docs.mdx","fa/welcome-to-docs":"/src/content/docs/fa/welcome-to-docs.mdx","guides/first-project-checklist":"/src/content/docs/guides/first-project-checklist.mdx","guides/getting-started":"/src/content/docs/guides/getting-started.mdx","guides/intro":"/src/content/docs/guides/intro.mdx","ja/welcome-to-docs":"/src/content/docs/ja/welcome-to-docs.mdx","tools/equipment-care":"/src/content/docs/tools/equipment-care.mdx","tools/tool-guides":"/src/content/docs/tools/tool-guides.mdx","zh-cn/welcome-to-docs":"/src/content/docs/zh-cn/welcome-to-docs.mdx","de/guides/first-project-checklist":"/src/content/docs/de/guides/first-project-checklist.mdx","de/guides/getting-started":"/src/content/docs/de/guides/getting-started.mdx","de/guides/intro":"/src/content/docs/de/guides/intro.mdx","fa/guides/first-project-checklist":"/src/content/docs/fa/guides/first-project-checklist.mdx","fa/guides/getting-started":"/src/content/docs/fa/guides/getting-started.mdx","fa/guides/intro":"/src/content/docs/fa/guides/intro.mdx","es/guides/first-project-checklist":"/src/content/docs/es/guides/first-project-checklist.mdx","es/guides/getting-started":"/src/content/docs/es/guides/getting-started.mdx","es/guides/intro":"/src/content/docs/es/guides/intro.mdx","fr/guides/first-project-checklist":"/src/content/docs/fr/guides/first-project-checklist.mdx","fr/guides/getting-started":"/src/content/docs/fr/guides/getting-started.mdx","ja/guides/first-project-checklist":"/src/content/docs/ja/guides/first-project-checklist.mdx","ja/guides/getting-started":"/src/content/docs/ja/guides/getting-started.mdx","ja/guides/intro":"/src/content/docs/ja/guides/intro.mdx","zh-cn/guides/first-project-checklist":"/src/content/docs/zh-cn/guides/first-project-checklist.mdx","zh-cn/guides/getting-started":"/src/content/docs/zh-cn/guides/getting-started.mdx","zh-cn/guides/intro":"/src/content/docs/zh-cn/guides/intro.mdx","fr/guides/intro":"/src/content/docs/fr/guides/intro.mdx"}},"blog":{"type":"content","entries":{"en/post-1":"/src/content/blog/en/post-1.md","en/post-2":"/src/content/blog/en/post-2.md","en/post-3":"/src/content/blog/en/post-3.md","fr/post-2":"/src/content/blog/fr/post-2.md","fr/post-3":"/src/content/blog/fr/post-3.md","fr/post-1":"/src/content/blog/fr/post-1.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/en/post-1.md": () => import('./post-1_D-9YxN4r.mjs'),"/src/content/blog/en/post-2.md": () => import('./post-2_C_l5VInf.mjs'),"/src/content/blog/en/post-3.md": () => import('./post-3_CNrLY49X.mjs'),"/src/content/blog/fr/post-1.md": () => import('./post-1_CgYVukMa.mjs'),"/src/content/blog/fr/post-2.md": () => import('./post-2_CfRIIOsv.mjs'),"/src/content/blog/fr/post-3.md": () => import('./post-3_D8E1EtqB.mjs'),"/src/content/docs/advanced/technical-specifications.mdx": () => import('./technical-specifications_78oHr61v.mjs'),"/src/content/docs/construction/custom-solutions.mdx": () => import('./custom-solutions_EZXxiZiF.mjs'),"/src/content/docs/construction/project-planning.mdx": () => import('./project-planning_CPDg9FvQ.mjs'),"/src/content/docs/construction/safety.mdx": () => import('./safety_CPqbOgL4.mjs'),"/src/content/docs/construction/service-overview.mdx": () => import('./service-overview_CtQhPgw5.mjs'),"/src/content/docs/de/guides/first-project-checklist.mdx": () => import('./first-project-checklist_5FnaXvhI.mjs'),"/src/content/docs/de/guides/getting-started.mdx": () => import('./getting-started_DeRzRl0x.mjs'),"/src/content/docs/de/guides/intro.mdx": () => import('./intro_CqI1N6oN.mjs'),"/src/content/docs/de/welcome-to-docs.mdx": () => import('./welcome-to-docs_DEPlYbcv.mjs'),"/src/content/docs/es/guides/first-project-checklist.mdx": () => import('./first-project-checklist_DCxTbOV-.mjs'),"/src/content/docs/es/guides/getting-started.mdx": () => import('./getting-started_DmSypX1O.mjs'),"/src/content/docs/es/guides/intro.mdx": () => import('./intro_DlijwzM7.mjs'),"/src/content/docs/es/welcome-to-docs.mdx": () => import('./welcome-to-docs_Bw_xHcwp.mjs'),"/src/content/docs/fa/guides/first-project-checklist.mdx": () => import('./first-project-checklist_DHBAjSNO.mjs'),"/src/content/docs/fa/guides/getting-started.mdx": () => import('./getting-started_GMIsi-uq.mjs'),"/src/content/docs/fa/guides/intro.mdx": () => import('./intro_BVR2_RMb.mjs'),"/src/content/docs/fa/welcome-to-docs.mdx": () => import('./welcome-to-docs_DwnVvp07.mjs'),"/src/content/docs/fr/guides/first-project-checklist.mdx": () => import('./first-project-checklist_DtAK6Vb7.mjs'),"/src/content/docs/fr/guides/getting-started.mdx": () => import('./getting-started_CpGszXo6.mjs'),"/src/content/docs/fr/guides/intro.mdx": () => import('./intro_DD0JAqmy.mjs'),"/src/content/docs/fr/welcome-to-docs.mdx": () => import('./welcome-to-docs_BX6Bcv0g.mjs'),"/src/content/docs/guides/first-project-checklist.mdx": () => import('./first-project-checklist_B9SayH-3.mjs'),"/src/content/docs/guides/getting-started.mdx": () => import('./getting-started_DWvqpprd.mjs'),"/src/content/docs/guides/intro.mdx": () => import('./intro_CxrNtp7D.mjs'),"/src/content/docs/ja/guides/first-project-checklist.mdx": () => import('./first-project-checklist_DRZ97LW_.mjs'),"/src/content/docs/ja/guides/getting-started.mdx": () => import('./getting-started_BxyF66Q5.mjs'),"/src/content/docs/ja/guides/intro.mdx": () => import('./intro_CqerQh6A.mjs'),"/src/content/docs/ja/welcome-to-docs.mdx": () => import('./welcome-to-docs_IEAOZM26.mjs'),"/src/content/docs/tools/equipment-care.mdx": () => import('./equipment-care_CnU6tz6L.mjs'),"/src/content/docs/tools/tool-guides.mdx": () => import('./tool-guides_MuvGPNMM.mjs'),"/src/content/docs/welcome-to-docs.mdx": () => import('./welcome-to-docs_DrCS0XSn.mjs'),"/src/content/docs/zh-cn/guides/first-project-checklist.mdx": () => import('./first-project-checklist_DEe188H1.mjs'),"/src/content/docs/zh-cn/guides/getting-started.mdx": () => import('./getting-started_BfAJOw3T.mjs'),"/src/content/docs/zh-cn/guides/intro.mdx": () => import('./intro_CfvRFHDo.mjs'),"/src/content/docs/zh-cn/welcome-to-docs.mdx": () => import('./welcome-to-docs_WjtbHv63.mjs'),"/src/content/insights/insight-1.md": () => import('./insight-1_Ijizn-px.mjs'),"/src/content/insights/insight-2.md": () => import('./insight-2_BYEe2f8c.mjs'),"/src/content/insights/insight-3.md": () => import('./insight-3_Bfis4w4O.mjs'),"/src/content/products/a765.md": () => import('./a765_b4MLzgkt.mjs'),"/src/content/products/b203.md": () => import('./b203_DGe6kOES.mjs'),"/src/content/products/f303.md": () => import('./f303_EaK3n130.mjs'),"/src/content/products/t845.md": () => import('./t845_VGR772oP.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

export { getCollection as g };
