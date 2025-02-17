export function scrollToElement(elementId) {
  console.log(elementId, 'elementId - scrollToElement');
  
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}