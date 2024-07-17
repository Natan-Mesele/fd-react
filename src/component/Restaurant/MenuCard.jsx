import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Checkbox,
    FormControlLabel,
    FormGroup,
  } from "@mui/material";
  import React from "react";
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
  
  const demo = [
    {
      category: "Nuts & seeds",
      ingredients: ["Cashews"],
    },
    {
      category: "Protein",
      ingredients: ["Ground beef", "Bacon strips"],
    },
  ];
  
  function MenuCard({item}) {

    const handleCheckBoxChange = (value) => {
        console.log("value");
    }
    return (
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className="lg:flex items-center justify-between">
            <div className="lg:flex items-center lg:gap-5">
              <img
                className="w-[7rem] h-[7rem] object-cover"
                src={item.images[0]}
                alt=""
              />
              <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
                <p className="font-semibold text-x1"></p>
                <p>${item.price}</p>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <form>
            <div className="flex gap-5 flex-wrap">
              {demo.map((categoryItem, index) => (
                <div key={index}>
                  <p>{categoryItem.category}</p>
                  <FormGroup>
                    {categoryItem.ingredients.map((item, index) => (
                      <FormControlLabel
                        key={index}
                        control={<Checkbox onChange={() => handleCheckBoxChange (item)}/>}
                        label={item}
                      />
                    ))}
                  </FormGroup>
                </div>
              ))}
            </div>
            <div className="text-left pt-5">
              <Button disabled={false} variant="contained" type="submit">
                {true ? "Add to Cart" : "Out of Stock"}
              </Button>
            </div>
          </form>
        </AccordionDetails>
      </Accordion>
    );
  }
  
  export default MenuCard;
  