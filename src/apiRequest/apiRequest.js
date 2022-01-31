const apiRequest = async (url = "", optionsObj = null) => {
  try {
    const response = await fetch(url, optionsObj);
    if (!response.ok) throw Error("Please reload the app");
  } catch (err) {
    console.error(err.message);
  }
};

export default apiRequest;
