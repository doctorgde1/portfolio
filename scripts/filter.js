'use strict'

// * All posible filter options with specific price and servise oputputs for ecsh combination
const options = {
    "1": {
        "lutsk": {
            "mini": {
                "1": {
                    "price" : "800 грн",
                    "services" : 'Від 100+ гарних фото в кольорокоррекції<br>Та 5 фото в ретуші на ваш вибір'
                },
               "2": {
                    "price" : "1500 грн",
                    "services" : 'Від 140+ гарних фото в кольорокоррекції<br>Та 5 фото в ретуші на ваш вибір'
                }
            },
            "maxi": {
                "1": {
                    "price" : "1000 грн",
                    "services" : 'Від 100+ гарних фото в кольорокоррекції<br>Та 15 фото в ретуші на ваш вибір<br>Та 1 рілс'
                },
               "2": {
                    "price" : "1700 грн",
                    "services" : 'Від 140+ гарних фото в кольорокоррекції<br>Та 15 фото в ретуші на ваш вибір<br>Та 1 рілс'
                }
            }
        },
        "lviv": {
            "mini": {
                "1": {
                    "price" : "1400 грн",
                    "services" : 'Від 100+ гарних фото в кольорокоррекції<br>Та 5 фото в ретуші на ваш вибір'
                },
                "2": {
                    "price" : "2100 грн",
                    "services" : 'Від 140+ гарних фото в кольорокоррекції<br>Та 5 фото в ретуші на ваш вибір'
                }
            },
            "maxi": {
                "1": {
                    "price" : "1600 грн",
                    "services" : 'Від 100+ гарних фото в кольорокоррекції<br>Та 15 фото в ретуші на ваш вибір<br>Та 1 рілс'
                },
               "2": {
                    "price" : "2300 грн",
                    "services" : 'Від 140+ гарних фото в кольорокоррекції<br>Та 15 фото в ретуші на ваш вибір<br>Та 1 рілс'
                }
            }
        },
        "rivne": {
            "mini": {
                "1": {
                    "price" : "1200 грн",
                    "services" : 'Від 100+ гарних фото в кольорокоррекції<br>Та 5 фото в ретуші на ваш вибір'
                },
               "2": {
                    "price" : "1900 грн",
                    "services" : 'Від 140+ гарних фото в кольорокоррекції<br>Та 5 фото в ретуші на ваш вибір'
                }
            },
            "maxi": {
                "1": {
                    "price" : "1400 грн",
                    "services" : 'Від 100+ гарних фото в кольорокоррекції<br>Та 15 фото в ретуші на ваш вибір<br>Та 1 рілс'
                },
               "2": {
                    "price" : "2100 грн",
                    "services" : 'Від 140+ гарних фото в кольорокоррекції<br>Та 15 фото в ретуші на ваш вибір<br>Та 1 рілс'
                }
            }
        }
    },
    "2": {
        "lutsk": {
            "mini": {
                "1.5": {
                    "price" : "1000 грн",
                    "services" : 'Від 90+ гарних фото в кольорокоррекції<br>Та 5 фото в ретуші на ваш вибір'
                },
                "2": {
                    "price" : "1300 грн",
                    "services" : 'Від 120+ гарних фото в кольорокоррекції<br>Та 5 фото в ретуші на ваш вибір'
                },
               "3": {
                    "price" : "2300 грн",
                    "services" : 'Від 150+ гарних фото в кольорокоррекції<br>Та 5 фото в ретуші на ваш вибір'
                }
            },
            "maxi": {
                "1.5": {
                    "price" : "1200 грн",
                    "services" : 'Від 90+ гарних фото в кольорокоррекції<br>Та 15 фото в ретуші на ваш вибір'
                },
                "2": {
                    "price" : "1500 грн",
                    "services" : 'Від 120+ гарних фото в кольорокоррекції<br>Та 15 фото в ретуші на ваш вибір'
                },
               "3": {
                    "price" : "2500 грн",
                    "services" : 'Від 150+ гарних фото в кольорокоррекції<br>Та 15 фото в ретуші на ваш вибір'
                }
            }
        },
    },
    "3": {
        "lutsk": {
            "mini": {
                "1": {
                    "price" : "1000 грн",
                    "services" : 'Від 100+ гарних фото в кольорокоррекції<br>Та 5 фото в ретуші на ваш вибір'
                },
               "2": {
                    "price" : "2000 грн",
                    "services" : 'Від 140+ гарних фото в кольорокоррекції<br>Та 5 фото в ретуші на ваш вибір'
                }
            },
            "maxi": {
                "1": {
                    "price" : "1200 грн",
                    "services" : 'Від 100+ гарних фото в кольорокоррекції<br>Та 15 фото в ретуші на ваш вибір<br>Та 1 рілс'
                },
               "2": {
                    "price" : "2200 грн",
                    "services" : 'Від 140+ гарних фото в кольорокоррекції<br>Та 15 фото в ретуші на ваш вибір<br>Та 1 рілс'
                }
            }
        },
        "lviv": {
            "mini": {
                "1": {
                    "price" : "1600 грн",
                    "services" : 'Від 100+ гарних фото в кольорокоррекції<br>Та 5 фото в ретуші на ваш вибір'
                },
                "2": {
                    "price" : "2600 грн",
                    "services" : 'Від 140+ гарних фото в кольорокоррекції<br>Та 5 фото в ретуші на ваш вибір'
                }
            },
            "maxi": {
                "1": {
                    "price" : "1800 грн",
                    "services" : 'Від 100+ гарних фото в кольорокоррекції<br>Та 15 фото в ретуші на ваш вибір<br>Та 1 рілс'
                },
               "2": {
                    "price" : "2800 грн",
                    "services" : 'Від 140+ гарних фото в кольорокоррекції<br>Та 15 фото в ретуші на ваш вибір<br>Та 1 рілс'
                }
            }
        },
        "rivne": {
            "mini": {
                "1": {
                    "price" : "1400 грн",
                    "services" : 'Від 100+ гарних фото в кольорокоррекції<br>Та 5 фото в ретуші на ваш вибір'
                },
               "2": {
                    "price" : "2400 грн",
                    "services" : 'Від 140+ гарних фото в кольорокоррекції<br>Та 5 фото в ретуші на ваш вибір'
                }
            },
            "maxi": {
                "1": {
                    "price" : "1600 грн",
                    "services" : 'Від 100+ гарних фото в кольорокоррекції<br>Та 15 фото в ретуші на ваш вибір<br>Та 1 рілс'
                },
               "2": {
                    "price" : "2600 грн",
                    "services" : 'Від 140+ гарних фото в кольорокоррекції<br>Та 15 фото в ретуші на ваш вибір<br>Та 1 рілс'
                }
            }
        }
    },
    "4": {
        "lutsk": {
            "mini": {
                "1.5": {
                    "price" : "1300 грн",
                    "services" : 'Від 90+ гарних фото в кольорокоррекції<br>Та 5 фото в ретуші на ваш вибір'
                },
                "2": {
                    "price" : "1800 грн",
                    "services" : 'Від 120+ гарних фото в кольорокоррекції<br>Та 5 фото в ретуші на ваш вибір'
                },
               "3": {
                    "price" : "2800 грн",
                    "services" : 'Від 150+ гарних фото в кольорокоррекції<br>Та 5 фото в ретуші на ваш вибір'
                }
            },
            "maxi": {
                "1.5": {
                    "price" : "1500 грн",
                    "services" : 'Від 90+ гарних фото в кольорокоррекції<br>Та 15 фото в ретуші на ваш вибір'
                },
                "2": {
                    "price" : "2000 грн",
                    "services" : 'Від 120+ гарних фото в кольорокоррекції<br>Та 15 фото в ретуші на ваш вибір'
                },
               "3": {
                    "price" : "3000 грн",
                    "services" : 'Від 150+ гарних фото в кольорокоррекції<br>Та 15 фото в ретуші на ваш вибір'
                }
            }
        },
    },

}
// * Selection of each price card
const price_cards = Array.from(document.querySelectorAll('.price-card'));

// * This function retuns all chosen price filter options from the given card
function get_filter_values(card) {
    let filter_values = [];
    const filter_buttons = Array.from(card.querySelectorAll('.filter__active button'));
    filter_buttons.forEach(button => {
        filter_values.push(button.value);
    });   
    return filter_values;
}

// * This function updating html output fields with filtered values
function update_filtered_output(card) {
    const filter_values = get_filter_values(card);
    const filter_price = options[`${card.id}`][`${filter_values[0]}`][`${filter_values[1]}`][`${filter_values[2]}`]["price"];
    const filter_services = options[`${card.id}`][`${filter_values[0]}`][`${filter_values[1]}`][`${filter_values[2]}`]["services"];
    const output_fields = card.querySelector('.output').children;
    output_fields[0].innerHTML = filter_price;
    output_fields[1].innerHTML = filter_services;
}

// * Initial output fill with default filter values
for (let i = 0; i < price_cards.length; i++) {
    update_filtered_output(price_cards[i]);
}

// * Click listener that track changes in filter
document.addEventListener('click', click => {
    let target = click.target.closest('.filter__item');
    if(!target) return;

    // * Set new active choise
    target.classList.add("filter__active");
    Array.from(target.parentElement.children).forEach(element => {
      if(element != target) {
          element.classList.remove("filter__active");
      }
    });

    // * Change output according to new filter values
    update_filtered_output(target.closest(".price-card"));
});


if(window.innerWidth <= 764) {
    Array.from(document.querySelectorAll('.filter__row')).forEach(row => {
        row.classList.toggle("filter-closed");
    });

    document.addEventListener('click', click => {
        let target = click.target.closest(".filter__close-button");
        if(!target) return;
        target.classList.toggle("switch-color");
        target.querySelector('.fa-solid').classList.toggle('fa-chevron-right');
        target.querySelector('.fa-solid').classList.toggle('fa-chevron-left');
        Array.from(target.parentElement.querySelectorAll('.filter__row')).forEach(row => {
            row.classList.toggle("filter-closed");
        });
    });
}
else {
   Array.from(document.querySelectorAll('.filter__close-button')).forEach(button => {
       button.style.display = "none";
   });
}

