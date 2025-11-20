/* Get references to DOM elements */
const categoryFilter = document.getElementById("categoryFilter");
const productSearch = document.getElementById("productSearch");
const productsContainer = document.getElementById("productsContainer");
const chatForm = document.getElementById("chatForm");
const chatWindow = document.getElementById("chatWindow");
const selectedProductsList = document.getElementById("selectedProductsList");
const generateRoutineBtn = document.getElementById("generateRoutine");
const productModal = document.getElementById("productModal");
const modalClose = document.getElementById("modalClose");
const languageSelect = document.getElementById("languageSelect");

/* Translations dictionary */
const translations = {
  en: {
    title: "Smart Routine & Product Advisor",
    searchPlaceholder: "Search products by name or keyword...",
    allCategories: "All Categories",
    cleansers: "Cleansers",
    moisturizer: "Moisturizers & Treatments",
    haircare: "Haircare",
    makeup: "Makeup",
    hairColor: "Hair Color",
    hairStyling: "Hair Styling",
    mensGrooming: "Men's Grooming",
    suncare: "Suncare",
    fragrance: "Fragrance",
    selectedProducts: "Selected Products",
    generateRoutine: "Generate Routine",
    chatTitle: "Let's Build Your Routine",
    chatPlaceholder: "Ask me about products or routines…",
    noProductsMessage: "Search for products or select a category",
    clickToAdd: "Click on products below to add them to your routine",
    noResults: "No products found. Try a different search or category.",
    viewDetails: "View details",
    brand: "Brand",
    productName: "Product Name",
    category: "Category",
    description: "Description",
    languageName: "English",
  },
  ar: {
    title: "مستشار الروتين والمنتجات الذكي",
    searchPlaceholder: "ابحث عن المنتجات بالاسم أو الكلمة الرئيسية...",
    allCategories: "جميع الفئات",
    cleansers: "المنظفات",
    moisturizer: "المرطبات والعلاجات",
    haircare: "العناية بالشعر",
    makeup: "المكياج",
    hairColor: "صبغة الشعر",
    hairStyling: "تصفيف الشعر",
    mensGrooming: "العناية بالرجال",
    suncare: "الحماية من الشمس",
    fragrance: "العطور",
    selectedProducts: "المنتجات المختارة",
    generateRoutine: "إنشاء روتين",
    chatTitle: "لنبني روتينك",
    chatPlaceholder: "اسألني عن المنتجات أو الروتين...",
    noProductsMessage: "ابحث عن المنتجات أو اختر فئة",
    clickToAdd: "انقر على المنتجات أدناه لإضافتها إلى روتينك",
    noResults: "لم يتم العثور على منتجات. جرب بحثًا أو فئة مختلفة.",
    viewDetails: "عرض التفاصيل",
    brand: "العلامة التجارية",
    productName: "اسم المنتج",
    category: "الفئة",
    description: "الوصف",
    languageName: "Arabic",
  },
  he: {
    title: "יועץ שגרת יופי ומוצרים חכם",
    searchPlaceholder: "חפש מוצרים לפי שם או מילת מפתח...",
    allCategories: "כל הקטגוריות",
    cleansers: "מנקים",
    moisturizer: "מרטיבים וטיפולים",
    haircare: "טיפוח שיער",
    makeup: "איפור",
    hairColor: "צבע שיער",
    hairStyling: "עיצוב שיער",
    mensGrooming: "טיפוח גברים",
    suncare: "הגנה מהשמש",
    fragrance: "בושם",
    selectedProducts: "מוצרים נבחרים",
    generateRoutine: "צור שגרה",
    chatTitle: "בואו נבנה את השגרה שלך",
    chatPlaceholder: "שאל אותי על מוצרים או שגרות...",
    noProductsMessage: "חפש מוצרים או בחר קטגוריה",
    clickToAdd: "לחץ על מוצרים למטה כדי להוסיף אותם לשגרה שלך",
    noResults: "לא נמצאו מוצרים. נסה חיפוש או קטגוריה אחרת.",
    viewDetails: "הצג פרטים",
    brand: "מותג",
    productName: "שם המוצר",
    category: "קטגוריה",
    description: "תיאור",
    languageName: "Hebrew",
  },
  hi: {
    title: "स्मार्ट रूटीन और उत्पाद सलाहकार",
    searchPlaceholder: "नाम या कीवर्ड से उत्पाद खोजें...",
    allCategories: "सभी श्रेणियां",
    cleansers: "क्लीन्ज़र",
    moisturizer: "मॉइस्चराइज़र और उपचार",
    haircare: "बालों की देखभाल",
    makeup: "मेकअप",
    hairColor: "हेयर कलर",
    hairStyling: "हेयर स्टाइलिंग",
    mensGrooming: "पुरुषों की देखभाल",
    suncare: "सनकेयर",
    fragrance: "इत्र",
    selectedProducts: "चयनित उत्पाद",
    generateRoutine: "रूटीन बनाएं",
    chatTitle: "आइए अपनी रूटीन बनाएं",
    chatPlaceholder: "मुझसे उत्पादों या रूटीन के बारे में पूछें...",
    noProductsMessage: "उत्पादों को खोजें या एक श्रेणी चुनें",
    clickToAdd: "अपनी रूटीन में जोड़ने के लिए नीचे उत्पादों पर क्लिक करें",
    noResults: "कोई उत्पाद नहीं मिला। एक अलग खोज या श्रेणी का प्रयास करें।",
    viewDetails: "विवरण देखें",
    brand: "ब्रांड",
    productName: "उत्पाद का नाम",
    category: "श्रेणी",
    description: "विवरण",
    languageName: "Hindi",
  },
  es: {
    title: "Asesor Inteligente de Rutinas y Productos",
    searchPlaceholder: "Buscar productos por nombre o palabra clave...",
    allCategories: "Todas las Categorías",
    cleansers: "Limpiadores",
    moisturizer: "Humectantes y Tratamientos",
    haircare: "Cuidado del Cabello",
    makeup: "Maquillaje",
    hairColor: "Color de Cabello",
    hairStyling: "Peinado",
    mensGrooming: "Cuidado Masculino",
    suncare: "Protección Solar",
    fragrance: "Fragancia",
    selectedProducts: "Productos Seleccionados",
    generateRoutine: "Generar Rutina",
    chatTitle: "Construyamos Tu Rutina",
    chatPlaceholder: "Pregúntame sobre productos o rutinas...",
    noProductsMessage: "Busca productos o selecciona una categoría",
    clickToAdd:
      "Haz clic en los productos a continuación para agregarlos a tu rutina",
    noResults:
      "No se encontraron productos. Intenta con otra búsqueda o categoría.",
    viewDetails: "Ver detalles",
    brand: "Marca",
    productName: "Nombre del Producto",
    category: "Categoría",
    description: "Descripción",
    languageName: "Spanish",
  },
  fr: {
    title: "Conseiller Intelligent de Routine et Produits",
    searchPlaceholder: "Rechercher des produits par nom ou mot-clé...",
    allCategories: "Toutes les Catégories",
    cleansers: "Nettoyants",
    moisturizer: "Hydratants et Traitements",
    haircare: "Soins Capillaires",
    makeup: "Maquillage",
    hairColor: "Coloration",
    hairStyling: "Coiffage",
    mensGrooming: "Soins Hommes",
    suncare: "Protection Solaire",
    fragrance: "Parfum",
    selectedProducts: "Produits Sélectionnés",
    generateRoutine: "Générer une Routine",
    chatTitle: "Créons Votre Routine",
    chatPlaceholder: "Interrogez-moi sur les produits ou les routines...",
    noProductsMessage: "Recherchez des produits ou sélectionnez une catégorie",
    clickToAdd:
      "Cliquez sur les produits ci-dessous pour les ajouter à votre routine",
    noResults:
      "Aucun produit trouvé. Essayez une autre recherche ou catégorie.",
    viewDetails: "Voir les détails",
    brand: "Marque",
    productName: "Nom du Produit",
    category: "Catégorie",
    description: "Description",
    languageName: "French",
  },
  zh: {
    title: "智能护理和产品顾问",
    searchPlaceholder: "按名称或关键词搜索产品...",
    allCategories: "所有类别",
    cleansers: "洁面",
    moisturizer: "保湿和护理",
    haircare: "护发",
    makeup: "化妆",
    hairColor: "染发",
    hairStyling: "造型",
    mensGrooming: "男士护理",
    suncare: "防晒",
    fragrance: "香水",
    selectedProducts: "已选产品",
    generateRoutine: "生成护理方案",
    chatTitle: "让我们建立您的护理方案",
    chatPlaceholder: "询问我关于产品或护理方案...",
    noProductsMessage: "搜索产品或选择类别",
    clickToAdd: "点击下面的产品将其添加到您的护理方案中",
    noResults: "未找到产品。尝试不同的搜索或类别。",
    viewDetails: "查看详情",
    brand: "品牌",
    productName: "产品名称",
    category: "类别",
    description: "描述",
    languageName: "Chinese",
  },
};

/* Current language */
let currentLang = "en";

/* Array to track selected products */
let selectedProducts = [];

/* Store all products for filtering */
let allProducts = [];

/* Function to get system prompt based on current language */
function getSystemPrompt() {
  const languageName = translations[currentLang].languageName;
  return `You are a professional beauty and skincare advisor for L'Oréal. Help users with product questions, routine advice, and skincare tips. Be helpful, concise, and enthusiastic. If users have selected products, you can reference them in your responses. When providing information about ingredients, research, or best practices, include relevant links or citations in markdown format [like this](https://example.com). Provide current, evidence-based recommendations. IMPORTANT: Respond in ${languageName} language.`;
}

/* Array to track conversation history */
let conversationHistory = [
  {
    role: "system",
    content: getSystemPrompt(),
  },
];

/* Show initial placeholder */
productsContainer.innerHTML = `
  <div class="placeholder-message">
    ${translations.en.noProductsMessage}
  </div>
`;

/* Load all products on page load */
(async () => {
  allProducts = await loadProducts();
})();

/* Load product data from JSON file */
async function loadProducts() {
  const response = await fetch("products.json");
  const data = await response.json();
  return data.products;
}

/* Create HTML for displaying product cards */
function displayProducts(products) {
  productsContainer.innerHTML = products
    .map(
      (product) => `
    <div class="product-card" data-product-id="${product.id}">
      <button class="product-info-btn" data-product-id="${product.id}" aria-label="View details for ${product.name}">
        <i class="fa-solid fa-info"></i>
      </button>
      <img src="${product.image}" alt="${product.name}">
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.brand}</p>
      </div>
    </div>
  `
    )
    .join("");

  /* Add click event listeners to each product card */
  document.querySelectorAll(".product-card").forEach((card) => {
    card.addEventListener("click", () =>
      toggleProductSelection(card, products)
    );
  });

  /* Add click event listeners to info buttons */
  document.querySelectorAll(".product-info-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation(); /* Prevent card selection when clicking info button */
      const productId = parseInt(btn.dataset.productId);
      const product = products.find((p) => p.id === productId);
      openProductModal(product);
    });
  });
}

/* Open product details modal */
function openProductModal(product) {
  const t = translations[currentLang];

  /* Populate modal with product data */
  document.getElementById("modalImage").src = product.image;
  document.getElementById("modalImage").alt = product.name;
  document.getElementById("modalBrand").textContent = product.brand;
  document.getElementById("modalName").textContent = product.name;

  /* Translate category name */
  const categoryKey = product.category.replace(/\s+/g, "").replace("'", "");
  const translatedCategory = t[categoryKey] || product.category;
  document.getElementById("modalCategory").textContent = translatedCategory;

  document.getElementById("modalDescription").textContent = product.description;

  /* Show modal */
  productModal.classList.add("active");
  document.body.style.overflow = "hidden"; /* Prevent background scrolling */
}

/* Close product details modal */
function closeProductModal() {
  productModal.classList.remove("active");
  document.body.style.overflow = ""; /* Restore scrolling */
}

/* Close modal when clicking close button */
modalClose.addEventListener("click", closeProductModal);

/* Close modal when clicking outside the modal content */
productModal.addEventListener("click", (e) => {
  if (e.target === productModal) {
    closeProductModal();
  }
});

/* Close modal when pressing Escape key */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && productModal.classList.contains("active")) {
    closeProductModal();
  }
});

/* Toggle product selection when card is clicked */
function toggleProductSelection(card, products) {
  const productId = parseInt(card.dataset.productId);
  const product = products.find((p) => p.id === productId);

  /* Check if product is already selected */
  const index = selectedProducts.findIndex((p) => p.id === productId);

  if (index > -1) {
    /* Product is selected, so unselect it */
    selectedProducts.splice(index, 1);
    card.classList.remove("selected");
  } else {
    /* Product is not selected, so select it */
    selectedProducts.push(product);
    card.classList.add("selected");
  }

  /* Update the selected products display */
  updateSelectedProductsDisplay();
}

/* Update the selected products list in the UI */
function updateSelectedProductsDisplay() {
  const t = translations[currentLang];

  if (selectedProducts.length === 0) {
    selectedProductsList.innerHTML = `
      <p style="color: #666; font-size: 14px;">${t.clickToAdd}</p>
    `;
    return;
  }

  /* Display each selected product as a chip/tag */
  selectedProductsList.innerHTML = selectedProducts
    .map(
      (product) => `
      <div class="selected-product-chip" data-product-id="${product.id}">
        <span>${product.brand} - ${product.name}</span>
        <button class="remove-product" data-product-id="${product.id}" aria-label="Remove ${product.name}">
          <i class="fa-solid fa-times"></i>
        </button>
      </div>
    `
    )
    .join("");

  /* Add click handlers to remove buttons */
  document.querySelectorAll(".remove-product").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const productId = parseInt(btn.dataset.productId);
      removeProduct(productId);
    });
  });
}

/* Remove a product from the selected list */
function removeProduct(productId) {
  /* Remove from selected products array */
  const index = selectedProducts.findIndex((p) => p.id === productId);
  if (index > -1) {
    selectedProducts.splice(index, 1);
  }

  /* Remove selected class from card if visible */
  const card = document.querySelector(
    `.product-card[data-product-id="${productId}"]`
  );
  if (card) {
    card.classList.remove("selected");
  }

  /* Update display */
  updateSelectedProductsDisplay();
}

/* Filter products by search term and category */
function filterAndDisplayProducts() {
  const t = translations[currentLang];
  const searchTerm = productSearch.value.toLowerCase().trim();
  const selectedCategory = categoryFilter.value;

  /* Start with all products */
  let filtered = allProducts;

  /* Apply category filter if a category is selected */
  if (selectedCategory) {
    filtered = filtered.filter(
      (product) => product.category === selectedCategory
    );
  }

  /* Apply search filter if search term exists */
  if (searchTerm) {
    filtered = filtered.filter((product) => {
      /* Search in product name, brand, category, and description */
      return (
        product.name.toLowerCase().includes(searchTerm) ||
        product.brand.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
      );
    });
  }

  /* Display filtered products or show message if no results */
  if (filtered.length === 0) {
    productsContainer.innerHTML = `
      <div class="placeholder-message">
        ${t.noResults}
      </div>
    `;
  } else {
    displayProducts(filtered);
  }
}

/* Filter and display products when category changes */
categoryFilter.addEventListener("change", () => {
  filterAndDisplayProducts();
});

/* Filter and display products when search input changes */
productSearch.addEventListener("input", () => {
  filterAndDisplayProducts();
});

/* Send chat message to OpenAI API with conversation history */
async function sendChatMessage(userMessage) {
  /* Update system prompt to match current language */
  conversationHistory[0].content = getSystemPrompt();

  /* Add user message to conversation history */
  conversationHistory.push({
    role: "user",
    content: userMessage,
  });

  /* Include context about selected products if any */
  let contextMessage = userMessage;
  if (selectedProducts.length > 0) {
    const productList = selectedProducts
      .map((p) => `${p.brand} ${p.name}`)
      .join(", ");
    contextMessage = `${userMessage}\n\n[User has selected these products: ${productList}]`;
    /* Update the last user message with context */
    conversationHistory[conversationHistory.length - 1].content =
      contextMessage;
  }

  /* Make the API request with full conversation history via Cloudflare Worker */
  console.log("Sending request to Cloudflare Worker:", {
    url: "https://lorealchatbot.sharmonb.workers.dev",
    messages: conversationHistory,
  });

  const response = await fetch("https://lorealchatbot.sharmonb.workers.dev", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messages: conversationHistory,
    }),
  });

  console.log("Cloudflare Worker response status:", response.status);

  /* Parse the response and return the content */
  const data = await response.json();
  console.log("Cloudflare Worker response data:", data);

  const assistantMessage = data.choices[0].message.content;
  console.log("Assistant message received:", assistantMessage);

  /* Add assistant response to conversation history */
  conversationHistory.push({
    role: "assistant",
    content: assistantMessage,
  });

  return assistantMessage;
}

/* Display a message in the chat window */
function addMessageToChat(message, sender) {
  /* Create message element */
  const messageDiv = document.createElement("div");
  messageDiv.style.marginBottom = "16px";
  messageDiv.style.lineHeight = "1.6";

  /* Check if RTL is active */
  const isRTL = document.documentElement.getAttribute("dir") === "rtl";

  if (sender === "user") {
    const alignment = isRTL ? "left" : "right";
    const textAlign = isRTL ? "right" : "left";

    messageDiv.innerHTML = `
      <div style="text-align: ${alignment};">
        <strong style="color: #666;">You:</strong>
        <div style="background: #f0f0f0; padding: 12px; border-radius: 8px; display: inline-block; max-width: 80%; text-align: ${textAlign}; margin-top: 4px;">
          ${message}
        </div>
      </div>
    `;
  } else {
    /* Parse markdown for assistant messages to support links and formatting */
    const parsedMessage = marked.parse(message, {
      breaks: true,
      gfm: true,
    });

    messageDiv.innerHTML = `
      <div>
        <strong style="color: #000;">L'Oréal Advisor:</strong>
        <div class="assistant-message" style="padding: 12px 0; line-height: 1.8;">
          ${parsedMessage}
        </div>
      </div>
    `;
  }

  chatWindow.appendChild(messageDiv);
  /* Scroll to bottom of chat window */
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

/* Send request to OpenAI API */
async function getRoutineFromOpenAI(products) {
  /* Create a formatted list of products for the prompt */
  const productList = products
    .map((p) => `- ${p.brand} ${p.name}: ${p.description}`)
    .join("\n");

  /* Get language name for the prompt */
  const languageName = translations[currentLang].languageName;

  /* Build the messages array for the OpenAI API */
  const messages = [
    {
      role: "system",
      content:
        `You are a professional beauty and skincare advisor for L'Oréal. Create personalized, step-by-step routines based on the products provided. Be helpful, concise, and enthusiastic. When mentioning benefits or application tips, include relevant links to dermatology resources or studies in markdown format [like this](https://example.com) when helpful. IMPORTANT: Respond in ${languageName} language.`,
    },
    {
      role: "user",
      content: `Create a personalized routine using these products:\n\n${productList}\n\nProvide a step-by-step routine with the order of application and brief tips for each product.`,
    },
  ];

  /* Make the API request via Cloudflare Worker */
  console.log("Sending routine request to Cloudflare Worker:", {
    url: "https://lorealchatbot.sharmonb.workers.dev",
    messages: messages,
  });

  const response = await fetch("https://lorealchatbot.sharmonb.workers.dev", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messages: messages,
    }),
  });

  console.log("Cloudflare Worker routine response status:", response.status);

  /* Parse the response and return the content */
  const data = await response.json();
  console.log("Cloudflare Worker routine response data:", data);

  return data.choices[0].message.content;
}

/* Handle Generate Routine button click */
generateRoutineBtn.addEventListener("click", async () => {
  /* Check if any products are selected */
  if (selectedProducts.length === 0) {
    chatWindow.innerHTML = `
      <p style="color: #666;">Please select at least one product to generate a routine.</p>
    `;
    return;
  }

  /* Clear chat window and show initial message */
  chatWindow.innerHTML = "";
  addMessageToChat(
    `Generate a routine for my ${selectedProducts.length} selected product${
      selectedProducts.length > 1 ? "s" : ""
    }`,
    "user"
  );

  /* Show loading message */
  const loadingDiv = document.createElement("div");
  loadingDiv.id = "loading";
  loadingDiv.style.color = "#666";
  loadingDiv.style.marginBottom = "16px";
  loadingDiv.innerHTML = `
    <i class="fa-solid fa-spinner fa-spin"></i> 
    Generating your personalized routine...
  `;
  chatWindow.appendChild(loadingDiv);

  try {
    /* Get routine from OpenAI */
    const routine = await getRoutineFromOpenAI(selectedProducts);

    /* Remove loading message */
    document.getElementById("loading").remove();

    /* Add assistant response to conversation history */
    conversationHistory.push(
      {
        role: "user",
        content: `Create a routine for these products: ${selectedProducts
          .map((p) => p.brand + " " + p.name)
          .join(", ")}`,
      },
      {
        role: "assistant",
        content: routine,
      }
    );

    /* Display the routine */
    addMessageToChat(routine, "assistant");
  } catch (error) {
    /* Remove loading message */
    const loading = document.getElementById("loading");
    if (loading) loading.remove();

    /* Handle any errors */
    chatWindow.innerHTML += `
      <p style="color: #d32f2f; margin-bottom: 16px;">
        <i class="fa-solid fa-triangle-exclamation"></i> 
        Error generating routine. Please check your API key and try again.
      </p>
    `;
    console.error("Error:", error);
  }
});

/* Chat form submission handler for follow-up questions */
chatForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  /* Get user input */
  const userInput = document.getElementById("userInput");
  const message = userInput.value.trim();

  if (!message) return;

  /* Display user message */
  addMessageToChat(message, "user");

  /* Clear input field */
  userInput.value = "";

  /* Show loading message */
  const loadingDiv = document.createElement("div");
  loadingDiv.id = "loading";
  loadingDiv.style.color = "#666";
  loadingDiv.style.marginBottom = "16px";
  loadingDiv.innerHTML = `
    <i class="fa-solid fa-spinner fa-spin"></i> 
    Thinking...
  `;
  chatWindow.appendChild(loadingDiv);
  chatWindow.scrollTop = chatWindow.scrollHeight;

  try {
    /* Send message to OpenAI and get response */
    const response = await sendChatMessage(message);

    /* Remove loading message */
    document.getElementById("loading").remove();

    /* Display assistant response */
    addMessageToChat(response, "assistant");
  } catch (error) {
    /* Remove loading message */
    const loading = document.getElementById("loading");
    if (loading) loading.remove();

    /* Handle any errors */
    const errorDiv = document.createElement("div");
    errorDiv.style.color = "#d32f2f";
    errorDiv.style.marginBottom = "16px";
    errorDiv.innerHTML = `
      <i class="fa-solid fa-triangle-exclamation"></i> 
      Error sending message. Please try again.
    `;
    chatWindow.appendChild(errorDiv);
    console.error("Error:", error);
  }
});

/* Language selector functionality */
languageSelect.addEventListener("change", (e) => {
  const selectedLang = e.target.value;
  currentLang = selectedLang;
  const html = document.documentElement;

  /* RTL languages: Arabic, Hebrew */
  const rtlLanguages = ["ar", "he"];

  if (rtlLanguages.includes(selectedLang)) {
    html.setAttribute("dir", "rtl");
  } else {
    html.setAttribute("dir", "ltr");
  }

  /* Update language attribute */
  html.setAttribute("lang", selectedLang);

  /* Update system prompt in conversation history to new language */
  conversationHistory[0].content = getSystemPrompt();

  /* Translate the page */
  translatePage(selectedLang);
});

/* Function to translate all page elements */
function translatePage(lang) {
  const t = translations[lang];

  /* Translate header */
  document.querySelector(".site-title").textContent = t.title;

  /* Translate search and filters */
  productSearch.placeholder = t.searchPlaceholder;

  /* Translate category options */
  categoryFilter.innerHTML = `
    <option value="">${t.allCategories}</option>
    <option value="cleanser">${t.cleansers}</option>
    <option value="moisturizer">${t.moisturizer}</option>
    <option value="haircare">${t.haircare}</option>
    <option value="makeup">${t.makeup}</option>
    <option value="hair color">${t.hairColor}</option>
    <option value="hair styling">${t.hairStyling}</option>
    <option value="men's grooming">${t.mensGrooming}</option>
    <option value="suncare">${t.suncare}</option>
    <option value="fragrance">${t.fragrance}</option>
  `;

  /* Translate selected products section */
  document.querySelector(".selected-products h2").textContent =
    t.selectedProducts;
  generateRoutineBtn.innerHTML = `
    <i class="fa-solid fa-wand-magic-sparkles"></i> ${t.generateRoutine}
  `;

  /* Translate chat section */
  document.querySelector(".chatbox h2").textContent = t.chatTitle;
  document.getElementById("userInput").placeholder = t.chatPlaceholder;

  /* Update placeholder message if visible */
  const placeholderMsg = document.querySelector(".placeholder-message");
  if (placeholderMsg) {
    placeholderMsg.textContent = t.noProductsMessage;
  }

  /* Update selected products display if needed */
  updateSelectedProductsDisplay();

  /* Re-filter and display products to maintain current view */
  filterAndDisplayProducts();
}
