FROM node

RUN mkdir -p /app/server
WORKDIR /app/server

COPY requirements.txt /app/server/

RUN pip install -r requirements.txt

COPY . /app/server

CMD [ "pip3", "index.py" ]