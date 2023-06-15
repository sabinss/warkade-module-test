FROM node:14

WORKDIR /

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install arkb globally
RUN npm install -g arkb

# Install dependencies
RUN npm install --loglevel=error
RUN npm install node-sass
# Copy the rest of the application code to the container
COPY . .

#RUN npx react-scripts update-templates
# Build the project
RUN npm run build

# Expose the desired port (adjust as needed)
EXPOSE 8000

# Start the server
CMD ["npm", "start"]
