# Reverse proxy
This is a basic `nginx` reverse proxy that:

* redirects `/` to the `frontend` container
* redirects `/api/main/` to the `api` container

It will use whaever certificates are provided in the `certificates` folder to serve https connections. To generate certificates, you can run the following command in *this* folder:

```
$ openssl req -x509 -nodes -newkey rsa:4096 -keyout ./certificates/private.key -out ./certificates/public.crt
```

To add additional routes to the reverse proxy, edit the `./config/nginx.conf` file