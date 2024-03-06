const config = {
  app: {
    port: process.env.PORT || 3000,
    db: {
      uri: process.env.MONGODB_URI || "mongodb+srv://ct447:muctu17121911@cluster0.graoxzd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    },
  },
};

module.exports = config;