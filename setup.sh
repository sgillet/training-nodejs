apt-get update \
&& apt-get install -y mongodb \
&& apt-get clean \
&& sed -i s/^journal=true/journal=false/ /etc/mongodb.conf \
&& echo nojournal=true >> /etc/mongodb.conf \
&& service mongodb start \
&& npm install -g express-generator istanbul jasmine-node@2.0.0-beta4 nodemon
