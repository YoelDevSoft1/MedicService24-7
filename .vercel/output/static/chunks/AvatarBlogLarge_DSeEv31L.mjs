import { f as createAstro, a as createComponent, b as renderTemplate, m as maybeRenderHead, d as renderComponent } from './astro/server_Cs1tdnfA.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_l3NLSKwN.mjs';

function formatDate(date) {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(date).toLocaleDateString(void 0, options);
}
function capitalize(str) {
  if (typeof str !== "string" || str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const $$Astro = createAstro("https://screwfast.uk");
const $$AvatarBlogLarge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AvatarBlogLarge;
  const { blogEntry } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex-shrink-0"> ${renderComponent($$result, "Image", $$Image, { "class": "size-10 rounded-full sm:h-14 sm:w-14", "src": blogEntry.data.authorImage, "alt": blogEntry.data.authorImageAlt, "draggable": "false", "format": "avif" })} </div>`;
}, "C:/Users/salud/OneDrive/Documents/GitHub/MedicService24-7/src/components/ui/avatars/AvatarBlogLarge.astro", void 0);

export { $$AvatarBlogLarge as $, capitalize as c, formatDate as f };
