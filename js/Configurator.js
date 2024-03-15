// import { getModelMaterials } from './Components/Materials.js';

const modelViewerElement = document.getElementById('model-container');
// Event until model loaded;
modelViewerElement.addEventListener('load', () => {

  //Custom function that returns materials and variants in specific structure. Find this structure in Materials js
  // const allMaterials = getModelMaterials(modelViewerElement);

  //Get all materials
  const allMaterials = modelViewerElement.model.materials;

  var currentVariantindex = 0;
  //Get all table top materials.
  // var topMaterials = [allMaterials[0][0],allMaterials[0][3]];

  //Top material with specific indexes in material array
  var topMaterials = [allMaterials[1],allMaterials[4]];

  //Get all table leg materials.
  // var legMaterials = [allMaterials[0][2]];

  //get leg materials
  var legMaterials = [allMaterials[2]];

  //Get all possible names of variants.
  const names = modelViewerElement.availableVariants;

  //Get all top variants buttos assign variant changing functionality to it.
  const allVariantsButtons = document.querySelectorAll('.top-variants');
  allVariantsButtons.forEach(variantsButton => {
    variantsButton.addEventListener('click', (event) => {
      modelViewerElement.variantName = event.target.value;
      currentVariantindex = names.indexOf(event.target.value);
      topMaterials.forEach(topMaterial => {
        topMaterial.pbrMetallicRoughness.setBaseColorFactor("#ffffff");
      });
    });
  });

  //Get all top color buttons assign color changing functionality to it.
  const allTopColorButtons = document.querySelectorAll('.top-colors');
  allTopColorButtons.forEach(colorButton => {
    colorButton.addEventListener('click', (event) => {
        modelViewerElement.variantName = names[0];
        const colorString = event.target.dataset.color;
        topMaterials.forEach(topMaterial => {
          topMaterial.pbrMetallicRoughness.setBaseColorFactor(colorString);
        });
      
    });
  });

  //Get all leg color buttons assign color changing functionality to it.
  const allBottomColorButtons = document.querySelectorAll('.bottom-colors');
  allBottomColorButtons.forEach(colorButton => {
    colorButton.addEventListener('click', (event) => {
      const colorString = event.target.dataset.color;
      legMaterials.forEach(legMaterial => {
        legMaterial.pbrMetallicRoughness.setBaseColorFactor(colorString);
      });
    });
  });

  //Hide Loader after all loading
  document.getElementById("loader").style.display = "none";
});


