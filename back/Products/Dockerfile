FROM python:3-onbuild

COPY . /usr/src/app

#RUN pip install flask psycopg2

CMD ["python", "prod_api.py"]



#FROM python:3

#WORKDIR /back-end

#COPY authent.py .
#RUN pip install flask psycopg2

#COPY /back-end .

#CMD ["python", "authent.py"]

# docker run --name py-test -e POSTGRES_PASSWORD=password -d python:3.8.0-buster

# docker cp authent.py py-test:/authent.py