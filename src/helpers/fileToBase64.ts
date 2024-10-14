export const fileToBase64Handler = async (file: File) => {
  let fileToBase64: string | ArrayBuffer | null = "";

  try {
    const res = await fileToBase64Creator(file);
    fileToBase64 = res as string | ArrayBuffer | null;
  } catch (e) {
    fileToBase64 = "";
  }

  return fileToBase64;
};

export const fileToBase64Creator = (file: File) => {
  const promise = new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = () => {
      reject();
    };
  });

  return promise;
};
