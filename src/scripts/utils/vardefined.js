export default function varDefined(variable) {
  return new Promise((resolve, reject) => {
    const loop = () => (variable !== undefined ? resolve(variable) : setTimeout(loop));
    loop();
  });
}
