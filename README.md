# Hypermedia-project: MIGUARDI
A Project of Hypermedia Applications course, Politecnico di Milano 2021-2022<br>
MIGUARDI: A website for a tourist office based in Milan<br>
:link: https://mi-guardi.herokuapp.com/

## Member presentation

| Member n. | First Name | Second Name | Matricola | Code Person | Course           | Email address                    |
|-----------|------------|-------------|-----------|-------------|------------------|----------------------------------|
| 1         | Carlo      | Bellacoscia | 975890    | 10560632    | Computer Science | carlo.bellacoscia@mail.polimi.it |
| 2         | Gregorio   | Barzasi     | 977551    | 10573032    | Computer Science | gregorio.barzasi@mail.polimi.it  |

## Framework 

We used **Nuxt**, a framework based on **Vue**, with server side rendering to improve SEO capabilities.

## Back-End
Our server runs on **Node.js** and we can identify two section:
* [*api.js*](server/api.js): it is the *Server Middleware* who provides 
  * API interface:
     * managing *GET request* from the client;
     * *Query execution* using Sequelize, a very popular ORM;
  * manages our *Postgres Database* and contains our table *Database definition*;

* [*initialize.js*](server/initialize.js): it imports a group of [*Json files*](server/json) and performs *tuples insertion* at the first start of the DB.

## Front-End
Most of the frontend HTML and CSS was built from scratch to achieve exactly what we had in mind. Only the header uses bootstrap top provide better responsiveness capabilities.
Some functions provided by the framework were crucial like:
* **v-for**: we extensively used this function to dynamically build our group topic pages with our [*GenericCard.vue*](components/GenericCard.vue)
* **v-if**: very useful to make components more reusable, hiding divs and specific section on certain conditions
* **v-show**: this was a crucial function for filtering the elements displayed in [*events.vue*](pages/events.vue) and [*services.vue*](pages/services.vue), in fact it permits to hide and show elements without re-rendering the page, making the filtering instantaneous.


### Components used
* [*CustomPage.vue*](components/CustomPage.vue): Used to model simple information pages like About MI, Contact us and FAQ. is composed by two section, one with image and text always present at the top, and an optional one generated at the bottom
* [*GenericCard.vue*](components/GenericCard.vue): Its a basic card with image as background and information above that. The information inside are displayed according to the props passed, this allow us to reuse this component in multiple pages. It auto resize to better fit mobile view
* [*GenericDetails.vue*](components/GenericDetails.vue): Used to model in the detail pages the image and infos in the right and the description below;
* [*UpcomingEvent.vue*](components/UpcomingEvent.vue): Small component used in the homepage, displays 3 GenericCard with the upcoming events information;
* [*GenericListElement.vue*](components/GenericListElement.vue): Small row that can contain small text and title, used in ItineraryListComponent as building block;
* [*ItineraryListComponent.vue*](components/ItineraryListComponent.vue): Little box composed of listed GenericListElements. Potentially it can display any number of block.
* [*JoinTableCard.vue*](components/JoinTableCard.vue): Possible multiple row that add in the detail pages traveling stages for itineraries, related itineraries and events hosted for points of interest and position for events;
* [*Map.vue*](components/Map.vue): As the name suggest, an iframe with an interactive map inside. It contains method used to dynamically build the API query.
* [*RandomDetail.vue*](components/RandomDetail.vue): A box with and image and a text section on the right. Used to display information about random POI in the homepage
* [*SmallCard.vue*](components/SmallCard.vue): Its a small card similar to the [*GenericCard.vue*](components/GenericCard.vue), used in [*JoinTableCard.vue*](components/JoinTableCard.vue) to visualize traveling stages, related itineraries, events hosted and position;
* [*TheHeader.vue*](components/TheHeader.vue): Component that belongs to the template of each pages ([*default.vue*](layouts/default.vue)). Is the main menu component and allow users to navigate to the group topic pages of the website. Uses the actual route to highlight the current page in the header
* [*TheFooter.vue*](components/TheFooter.vue): Component that belongs to the template of each pages ([*default.vue*](layouts/default.vue)). Sits at the bottom of the page providing links to About US, Contacts and FAQ


### Pages contribution

| Gregorio Barzasi                     | Carlo Bellacoscia                                                 |
|--------------------------------------|-------------------------------------------------------------------|
| [*index.vue*](pages/index.vue)       | [*events_details/_id.vue*](pages/events_details/_id.vue)          |
| [*events.vue*](pages/events.vue)     | [*itineraries_details/_id.vue*](pages/itineraries_details/_id.vue) |
| [*about.vue*](pages/about.vue)       | [*poi_details/_id.vue*](pages/poi_details/_id.vue)                |
| [*faq.vue*](pages/faq.vue)           | [*services_details/_id.vue*](pages/services_details/_id.vue)      |
| [*contact.vue*](pages/contact.vue)   | [*itineraries.vue*](pages/itineraries.vue)                        |
| [*services.vue*](pages/services.vue) | [*poi.vue*](pages/poi.vue)                                        |



### Back-end contribution

| Gregorio Barzasi                              |Carlo Bellacoscia                          |
|----------------------------------------------|----------------------------------------------|
| Some API endpoints [*api.js*](server/api.js) | Some APi endpoints [*api.js*](server/api.js) |
| [*initialize.js*](server/initialize.js)      | Database tables [*api.js*](server/api.js)    |

### Components contribution

| Gregorio Barzasi                                                    | Carlo Bellacoscia                                   |
|---------------------------------------------------------------------|-------------------------------------------------------|
| [*TheHeader.vue*](components/TheHeader.vue)                         | [*TheFooter.vue*](components/TheFooter.vue)           |
| [*RandomDetail.vue*](components/RandomDetail.vue)                   | [*SmallCard.vue*](components/SmallCard.vue)           |
|[*Map.vue*](components/Map.vue) Logic                                | [*Map.vue*](components/Map.vue) Layouts               |
|[*ItineraryListComponent.vue*](components/ItineraryListComponent.vue)| [*JoinTableCard.vue*](components/JoinTableCard.vue)   |
| [*GenericListElement.vue*](components/GenericListElement.vue)       | [*GenericDetails.vue*](components/GenericDetails.vue) |
| [*UpcomingEvent.vue*](components/UpcomingEvent.vue)                 |                                                       |
| [*CustomPage.vue*](components/CustomPage.vue)       |                                                       |
