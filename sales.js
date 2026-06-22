function getQuoteData(){return{product:document.getElementById("product")?.value||"",quantity:document.getElementById("quantity")?.value||"",price:document.getElementById("sellPrice")?.innerText||""};}function formatQuote(q){return`TIPA Pricing Quote

Product: ${q.product}
Quantity: ${q.quantity}
Price: ${q.price}`;}function saveQuote(){localStorage.setItem("tipa_last_quote",JSON.stringify(getQuoteData()));alert("Saved");}function shareWhatsApp(){const t=encodeURIComponent(formatQuote(getQuoteData()));window.open(`https://wa.me/?text=${t}`);}function copyQuote(){navigator.clipboard.writeText(formatQuote(getQuoteData()));alert("Copied");}