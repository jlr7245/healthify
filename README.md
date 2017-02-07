# HEALTHIFY!

![homepage](public/images/home.png)
![dashboard](public/images/d3.png)



### What is Healthify? (Mind-Full Eating)
#####
Healthify is a simple web application built for fitness casuals who need an easy way of tracking the foods that they are eating. We believe that by using natural language to add foods & meals and creating an intuitive interface *we will achieve* a higher rate of long-term engagement & more useful/actionable output for the user. We came up with this idea because many food tracking apps are too labor-intensive and focus too much on metrics.


### Healthify vs. Competitors
|                                 | Up | Nutritionix | My Fitness Pal | Healthify |
|---------------------------------|----|-------------|----------------|-----------|
| Weight Loss Metrics             | Y  | Y           | Y              | N*        |
| User Dashboard                  | Y  | Y           | Y              | Y         |
| History of Past Foods           | Y  | Y           | Y              | Y         |
| Accessible Content Before Login | N  | N           | N              | Y         |

#### API CALL FROM [NUTRITIONIX](https://developer.nutritionix.com/)
	function getFoodInfo(req,res,next) {
  		apiCall.nutriAXIOS.post('/', {
    		query: `${req.body.foodName}`,
    		timezone: 'US/Eastern'
 		}).then((theResult) => {
   			res.locals.foodData = theResult.data.foods;
   			return next();
  		}).catch((err) => console.log(err));
	}

### Wireframe
![wireframe](public/images/wireframe.png)

### Technologies Used:
Node: Express<br>
JavaScript: jQuery, EJS, Hopscotch<br>
CSS: SASS, Materialize, Flexbox<br>
Postgress<br>
Moment<br>
Axios<br>
D3!


### Additional Sources:

[Our ZenHub Board](https://github.com/jlr7245/healthify/projects/1?fullscreen=true)<br>
[NUTRITIONIX API](https://developer.nutritionix.com/)<br>
[ICONS from The Noun Project:](https://thenounproject.com/)<br>
- Daily Meals icon by Anbileru Adaleru,<br>
- Iced Donut by Imogen Oh,<br>
- Apple Half by Imogen,<br>
- Refrigerator by Wojciech Zasina



