FROM eclipse-temurin:21
EXPOSE 8080
ADD backend/target/app.jar currywurst.jar
ENTRYPOINT ["java","-jar","currywurst.jar"]