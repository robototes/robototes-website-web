FROM node:8
LABEL name="robototes-website" service="web" version="2.0.0-alpha" maintainer="webmaster@robototes.com"

# Copy the server files
COPY server.js package.json yarn.lock views/ routes/ configs/ ./

# Install our dependencies
RUN [ "yarn", "install", "--production", "--non-interactive" ]

# Basic configuration
ENV PORT=3000 IP="0.0.0.0"

# Tell the user what ports to expose
EXPOSE 3000/tcp

CMD [ "yarn", "start" ]
