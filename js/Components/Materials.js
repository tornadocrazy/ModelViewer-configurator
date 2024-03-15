/**
 * 
 * @param {*} modelViewerElement 
 * @returns array of materials in a specific structure.
 * [[mat1,mat2,variantmat1,mat4,mat5],[mat1,mat2,variantmat2,mat4,mat5],[mat1,mat2,variantmat3,mat4,mat5]]
 * This structure is used to 
 */
function getModelMaterials(modelViewerElement) {
  const names = modelViewerElement.availableVariants;
  var mainArray = [];
  const symbolKey = Reflect.ownKeys(modelViewerElement.model).find(key => key.toString() === 'Symbol(roots)');
  const nodes = modelViewerElement.model[symbolKey];
  for (let index = 0; index < names.length; index++) {
    var subarray = [];
    mainArray.push(subarray);
    nodes.forEach(node => {
      if (node.materials && node.materials.size > 0) {
        if (node.variantToMaterialMap  && node.variantToMaterialMap.size > 0) {
          subarray.push(node.variantToMaterialMap.get(index))
        } 
        else{
          subarray.push(Array.from(node.materials.values())[0])
        }
      } 
    });
  }
  return mainArray;
}
export {getModelMaterials};