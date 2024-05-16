/* empty css                         */
import { f as createAstro, a as createComponent, b as renderTemplate, d as renderComponent } from './astro/server_Cs1tdnfA.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from './MainLayout_DY-X9ZDZ.mjs';
import { $ as $$AnnouncementBanner, a as $$HeroSection, h as heroImage, b as $$ClientsSection, c as $$FeaturesGeneral, d as $$FeaturesNavs, t as tools, e as dashboard, f as construction, g as $$TestimonialsSection, i as $$PricingSection, j as $$FAQ, k as $$HeroSectionAlt } from './dashboard-image_B6WSVNKK.mjs';
import { f as featureImage } from './features-image_BSUlqLZ-.mjs';

const subTitle$1 = "Ask us anything about our brand and products, and get factual responses.";
const faqs = [
	{
		question: "What types of tools are included in the Starter Kit?",
		answer: "The Starter Kit features essential hand and power tools for diverse DIY projects, including hammers, drills, screwdrivers, and a variety of fasteners. It's a curated selection to help beginners and experienced DIYers alike tackle most home improvement tasks."
	},
	{
		question: "Can I upgrade from the Starter Kit to the Professional Toolbox?",
		answer: "Absolutely! You can upgrade to the Professional Toolbox at any time to access a wider range of high-quality tools, enjoy priority customer support, and receive exclusive content. Contact our support team for a seamless transition."
	},
	{
		question: "What discounts are available for bulk orders through the Professional Toolbox plan?",
		answer: "Professional Toolbox members are entitled to exclusive discounts on bulk orders, the percentage of which may vary depending on the order volume. Get in touch with us to discuss your needs, and we'll provide a tailored discount structure."
	},
	{
		question: "What kind of customer support can I expect?",
		answer: "All our customers receive dedicated email support. With the Starter Kit, you'll receive our standard support, while the Professional Toolbox plan upgrades you to priority support, meaning faster response times and specialized assistance."
	},
	{
		question: "How current are the online resources and tutorials?",
		answer: "We regularly update our online resources and tutorials to reflect the latest trends in DIY and construction, as well as introductions to new tools and techniques. Our material aims to be comprehensive and user-friendly for all skill levels."
	},
	{
		question: "Does ScrewFast offer services for large-scale construction projects?",
		answer: "Yes, our Enterprise Solutions are designed for larger companies requiring comprehensive services. We provide consultation, planning, and supply of high-grade tools and materials, as well as staffing solutions for substantial construction needs. Contact us for a customized quote."
	}
];
const faqs$1 = {
	subTitle: subTitle$1,
	faqs: faqs
};

const features = [
	{
		heading: "Servicios de laboratorio a domicilio",
		content: "Ofrecemos la comodidad y conveniencia de realizar las pruebas de laboratorio desde la comodidad de tu hogar. Nuestro equipo de profesionales altamente capacitados visitará tu hogar para realizar las pruebas, ahorrándote tiempo y esfuerzo.",
		svg: "verified"
	},
	{
		heading: "Servicios de enfermería",
		content: "Nuestro servicio de enfermería a domicilio está diseñado para brindarte la atención de enfermería que necesitas en la comodidad de tu hogar. Contamos con un equipo de enfermeras altamente capacitadas y equipadas para brindarte una atención de calidad.",
		svg: "verified"
	},
	{
		heading: "Sutura de heridas a domicilio",
		content: "Contamos con un servicio de sutura de heridas a domicilio, brindando al paciente la comodidad y conveniencia de recibir este servicio en su hogar. Este servicio es útil para casos de sutura de heridas menores donde no es necesario ir a una clínica.",
		svg: "verified"
	},
	{
		heading: "Lavado de oidos",
		content: "Con nuestro servicio de lavado de oídos a domicilio, te brindamos la comodidad y tranquilidad de realizar esta tarea en tu hogar. Contamos con equipo especializado y profesionales altamente capacitados para brindarte una atención de calidad.",
		svg: "verified"
	}
];

const title = "Simple, Transparent Pricing";
const subTitle = "Boost efficiency with ScrewFast's clear, value-driven plans.";
const badge = "Best value";
const thirdOption = "Enterprise Solutions?";
const btnText = "Get a Custom Quote";
const starterKit = {
	name: "Starter Kit",
	description: "Best option for DIY projects",
	price: "$49",
	cents: ".00",
	billingFrequency: "USD / monthly",
	features: [
		"Key hardware tools",
		"Access to guides & tutorials",
		"Standard support"
	],
	purchaseBtnTitle: "Get the Starter Kit",
	purchaseLink: "#"
};
const professionalToolbox = {
	name: "Professional Toolbox",
	description: "Best for large scale uses",
	price: "$89",
	cents: ".00",
	billingFrequency: "USD / monthly",
	features: [
		"Premium tool selection",
		"Priority support",
		"Exclusive content & deals",
		"Bulk order discounts"
	],
	purchaseBtnTitle: "Get the Professional Toolbox",
	purchaseLink: "#"
};
const pricing = {
	title: title,
	subTitle: subTitle,
	badge: badge,
	thirdOption: thirdOption,
	btnText: btnText,
	starterKit: starterKit,
	professionalToolbox: professionalToolbox
};

const $$Astro = createAstro("https://screwfast.uk");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const avatarSrcs = [
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AnnouncementBanner", $$AnnouncementBanner, { "btnId": "dismiss-button", "btnTitle": "Canal de atencion rapida", "url": "https://github.com/mearashadowfax/ScrewFast" })} ${renderComponent($$result2, "HeroSection", $$HeroSection, { "title": `Servicio de atenci\xF3n m\xE9dica a domicilio en  <span
        class="text-yellow-500 dark:text-yellow-400">Bogot\xE1</span>`, "subTitle": "Si necesitas atenci\xF3n m\xE9dica, pero te resulta dif\xEDcil trasladarte a una cl\xEDnica o centro m\xE9dico, en Bogot\xE1 puedes contar con nuestro servicio de atenci\xF3n m\xE9dica a domicilio.", "primaryBtn": "WhatsApp", "primaryBtnURL": "/products", "secondaryBtn": "Llamada de emergencia", "secondaryBtnURL": "/contact", "withReview": true, "avatars": avatarSrcs, "rating": `<span class="font-bold">4.8</span> / 5`, "starCount": 4, "reviews": `From Over <span class="font-bold">12.8k</span> Reviews`, "src": heroImage, "alt": "Stack of ScrewFast product boxes containing assorted hardware tools" })} ${renderComponent($$result2, "ClientsSection", $$ClientsSection, { "title": "Confianza de l\xEDderes", "subTitle": "Experimente la confiabilidad elegida por los gigantes de la industria." })} ${renderComponent($$result2, "FeaturesGeneral", $$FeaturesGeneral, { "title": "Entre los servicios que ofrecemos se encuentran", "subTitle": "Al solicitar nuestro servicio de atenci\xF3n m\xE9dica a domicilio, nuestro equipo de profesionales visitar\xE1 tu hogar en un horario convenido por ti. Realizaremos una evaluaci\xF3n de tu estado de salud y te brindaremos el tratamiento necesario.", "src": featureImage, "alt": "ScrewFast products in floating boxes", "features": features })} ${renderComponent($$result2, "FeaturesNavs", $$FeaturesNavs, { "title": `Detalles del servicio de <span class="text-yellow-500 dark:text-yellow-400">atenci\xF3n m\xE9dica a domicilio</span> en Bogot\xE1`, "tabs": [
    {
      heading: "Servicio Medico en Casa",
      content: "Brindamos un servicio m\xE9dico a domicilio en Bogot\xE1 de calidad y confianza. Contamos con un equipo profesional dedicado a llevar la atenci\xF3n m\xE9dica que necesitas hasta la comodidad de tu hogar.",
      svg: "tools",
      src: tools,
      alt: "Servicio medico",
      first: true
    },
    {
      heading: "Profesionalismo y Eficiencia",
      content: "Nuestro servicio m\xE9dico a domicilio se caracteriza por el profesionalismo y la eficiencia. Contamos con un equipo de m\xE9dicos y enfermeras altamente capacitados y equipados para brindarte una atenci\xF3n m\xE9dica integral y personalizada en la comodidad de tu hogar.",
      svg: "dashboard",
      src: dashboard,
      alt: "A screenshot or graphic representation of the intuitive dashboard",
      second: true
    },
    {
      heading: "Capacidad Medica y Humana",
      content: "Nuestra empresa se enfoca en brindar una atenci\xF3n m\xE9dica a domicilio que combine la capacidad m\xE9dica con la calidad humana. Adem\xE1s de brindarte una atenci\xF3n profesional y eficiente, nos esforzamos para que te sientas c\xF3modo y seguro mientras recibes la atenci\xF3n m\xE9dica que necesitas.",
      svg: "house",
      src: construction,
      alt: "Gray metal building frame near tower crane during daytime"
    }
  ] })} ${renderComponent($$result2, "TestimonialsSection", $$TestimonialsSection, { "title": "\xA1Acelera tu atenci\xF3n m\xE9dica con ServiMedic24/7!", "subTitle": "En ServiMedic24/7, damos prioridad a tu atenci\xF3n m\xE9dica con una r\xE1pida programaci\xF3n de citas.", ";": true, "testimonials": [
    {
      content: "ServiMedic24/7 ha mejorado dram\xE1ticamente la eficiencia m\xE9dica de nuestros pacientes con una programaci\xF3n de citas instant\xE1nea y tiempos de respuesta r\xE1pidos y fenomenales.",
      author: "Mariangel Devs",
      role: "CEO | ConstructDevS Inc.",
      avatarSrc: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?q=80&w=1453&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
    }
  ], "statistics": [
    {
      count: "70k+",
      description: "pacientes atendidos \u2014 desde personas mayores hasta profesionales ocupados"
    },
    {
      count: "35%",
      description: "de aumento en la eficiencia m\xE9dica con la soluciones excepcionales de ServiMedic24/7."
    },
    {
      count: "15.3%",
      description: "de reducci\xF3n en admisiones hospitalarias reportadas por pacientes a largo plazo"
    },
    {
      count: "2x",
      description: "Recorrido de recuperaci\xF3n m\xE1s r\xE1pido utilizando los servicios de atenci\xF3n m\xE9dica profesionales y compasivos de ServiMedic24/7."
    }
  ] })} ${renderComponent($$result2, "PricingSection", $$PricingSection, { "pricing": pricing })} ${renderComponent($$result2, "FAQ", $$FAQ, { "title": "Frequently<br />asked questions", "faqs": faqs$1 })} ${renderComponent($$result2, "HeroSectionAlt", $$HeroSectionAlt, { "title": "Let's Build Together", "subTitle": "ScrewFast is an open-source template, meticulously crafted with Astro, Tailwind CSS, and Preline UI frameworks.", "url": "https://github.com/mearashadowfax/ScrewFast" })} ` })}`;
}, "C:/Users/salud/OneDrive/Documents/GitHub/MedicService24-7/src/pages/index.astro", void 0);

const $$file = "C:/Users/salud/OneDrive/Documents/GitHub/MedicService24-7/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
