export function currentSiteLocation<T extends IObjectFromApiCall>(
  data: T
): void {
  const siteLocationFromApi = data.launch_site.site_id;

  const area: NodeListOf<HTMLParagraphElement> =
    document.querySelectorAll(".area");

  area.forEach((location) => {
    if (location.parentElement) {
      const title = location.parentElement.previousElementSibling;

      if (siteLocationFromApi === location.id) {
        if (title) {
          title.children[0].classList.add("active-location");
        }
      }
    }
  });
}
