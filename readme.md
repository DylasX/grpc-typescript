gRPC es un sistema de comunicación de código abierto desarrollado por Google que permite la comunicación eficiente y confiable entre aplicaciones cliente-servidor en diferentes plataformas y lenguajes de programación.

La tecnología subyacente de gRPC es Protocol Buffers (protobuf), que es un mecanismo de serialización de datos ligero y de alta velocidad. gRPC utiliza protobuf para definir una interfaz de servicio, que especifica los métodos de servicio que un servidor proporciona y los parámetros de entrada y salida de cada método.

(Protocol Buffers (protobuf) es un formato de serialización de datos binarios de alta eficiencia desarrollado por Google. Permite la serialización y deserialización de datos estructurados de forma rápida y eficiente en diferentes lenguajes de programación y plataformas.)


Ventajas

Alta velocidad y eficiencia: gRPC utiliza Protocol Buffers como formato de serialización de datos, lo que permite una alta velocidad y eficiencia en la transmisión de datos entre el cliente y el servidor.

Multiplexación de streams: gRPC utiliza el protocolo HTTP/2, que admite la multiplexación de streams, lo que significa que varios streams pueden transmitirse simultáneamente en una sola conexión TCP.

Streaming bidireccional: gRPC admite el streaming bidireccional, lo que permite a los clientes y servidores enviar y recibir datos en tiempo real.

Compatibilidad multiplataforma: gRPC es compatible con múltiples lenguajes de programación y plataformas, lo que lo hace ideal para sistemas distribuidos que utilizan diferentes tecnologías.

Interfaz definida por contrato: gRPC utiliza una interfaz definida por contrato (IDL) para definir los servicios que proporciona el servidor y los métodos que pueden invocar los clientes, lo que facilita el desarrollo y la integración de aplicaciones.

Generación de código: gRPC ofrece herramientas de generación de código que permiten generar código cliente y servidor a partir de la definición de la interfaz de servicio, lo que simplifica el proceso de desarrollo.

//repeated es igual a decir que es una lista 


yarn install

yarn start

yarn client
