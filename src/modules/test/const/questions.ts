import {Test, TreeNode} from "./type";

export const questions: TreeNode<Test> = {
    data: {
        question: "Архитекткура, это когда вы делаете названия для папок и файлов?",
    },
    yes: {
        data: {
            question: "",
            result: "ВЫ СУПЕР БАЛБЕС",
        }
    },
    no: {
        data: {
            question: "Это построение монуметов?",
        },
        yes: {
            data: {
                question: "",
                result: "ВЫ БАЛБЕС",
            }
        },
        no: {
            data: {
                question: "Вы интересуетесь монуметами?",
            },
            no: {
                data: {
                    question: "Вы фронендер?",
                },
                yes: {
                    data: {
                        question: "Вы знаете только html и css?",
                    },
                    yes: {
                        data: {
                            question: "",
                            result: "Тогда вам не нужна Архитектура, учите js",
                        }
                    },
                    no: {
                        data: {
                            question: "Вы пишите на React/Vue/Svelte?",
                        },
                        yes: {
                            data: {
                                question: "Умеете декомпозировать компоненты?",
                            },
                            yes: {
                                data: {
                                    question: "Считаете ли вы папку components  мусоркой?",
                                },
                                yes: {
                                    data: {
                                        question: "Писали по модульной архитектуре?",
                                    },
                                    yes: {
                                        data: {
                                            question: "Любите ли вы читать чаты по проге в телеграме и размазывать всю логику по компонентам?"
                                        },
                                        yes: {
                                            data: {
                                                question: "",
                                                result: "Тогда вам подходит FEATURE SLICED DESIGN архитектура, можно прям в документации примеры смотреть, там как раэ все размазано :)"
                                            }
                                        },
                                        no: {
                                            data: {
                                                question: "",
                                                result: "Тогда смотрите на FEATURE SLICED DESIGN но фильтруйте информацию"
                                            }
                                        }
                                    },
                                    no: {
                                        data: {
                                            question: "",
                                            result: "Рекомендую ознакомиться с модульной архитектурой"
                                        }
                                    }
                                },

                            },
                            no: {
                                data: {
                                    question: "",
                                    result: "Сначала научитесь это делать!"
                                }
                            }
                        },
                        no: {
                            data: {
                                question: "JS многопоточный язык программирования?"
                            },
                            yes: {
                                data: {
                                    question: "У JS нет примитивов?"
                                },
                                yes: {
                                    data: {
                                        question: '',
                                        result: "Тогда зачем вы зашли сюда?) Если считаете, что архитектура в вебе это анархия?"
                                    }
                                },
                                no: {
                                    data: {
                                        question: "",
                                        result: "Тогда вам подходит Модульная архитектура"
                                    }
                                }
                            },
                            no: {
                                data: {
                                    question: "",
                                    result: "Тогда вам подходит Модульная архитектура"
                                }
                            }
                        }
                    }
                },
                no: {
                    data: {
                        question: "Вы Бекендер?",
                    },
                    yes: {
                        data: {
                            question: "Вам нужно за короткие сроки разработать приложение?",
                            result: "",
                        },
                        yes: {
                            data: {
                                question: "",
                                result: "Тогда вам подходит Модульный Монолит"
                            }
                        },
                        no: {
                            data: {
                                question: "Вы знаете дядю Боба?",
                            },
                            yes: {
                                data: {
                                    question: "Читали его книги?"
                                },
                                yes: {
                                    data: {
                                        question: "Вы работаете бекендером?",
                                        result: ""
                                    },
                                    yes: {
                                        data: {
                                            question: "",
                                            result: "Тогда вам подходит Трехслойная Архитектура"
                                        }
                                    },
                                    no: {
                                        data: {
                                            question: "Знакомы с концепцией DDD?",
                                        },
                                        yes: {
                                            data: {
                                                question: "",
                                                result: "Тогда вам подходит Чистая Архиитектура"
                                            }
                                        },
                                        no: {
                                            data: {
                                                question: "",
                                                result: "Тогда посмотрите на Модульный Монолит"
                                            }
                                        }
                                    }
                                },
                                no: {
                                    data: {
                                        question: "",
                                        result: "Тогда рекомендую вам почитать его книги"
                                    }
                                },
                            },
                            no: {
                                data: {
                                    question: '',
                                    result: "Тогда посмотрите на распределенный монолит"
                                }
                            }

                        },

                    },
                    no: {
                        data: {
                            question: "Вы знаете что такое эенвилоуп?",
                        },
                        yes: {
                            data: {
                                question: '',
                                result: 'Поздаврляю, вы приняты!'
                            }
                        },
                        no: {
                            data: {
                                question: '',
                                result: 'Как вы сюда попали?'
                            }
                        }
                    }
                },


            },
            yes: {
                data: {
                    question: "Как вы сюда попали?",
                }
            }
        }
    }
}
