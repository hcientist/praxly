// import Blockly from 'blockly';
// import { block } from 'blockly/core/tooltip';
// import { ToolboxDefinition } from 'blockly/core/utils/toolbox';

export const toolbox = {
    'kind': 'categoryToolbox',
    'contents': [
      // {
      //   'kind': 'block',
      //   'type': 'controls_repeat_ext',
      //   'inputs': {
      //     'TIMES': {
      //       'shadow': {
      //         'type': 'math_number',
      //         'fields': {
      //           'NUM': 5
      //         }
      //       }
      //     }
      //   }
      // }, 
      {
        "kind": "category",
        "name": "logic",
        "categorystyle": "logic_blocks",
        "contents": [
            {
                'kind': 'block',
                'type': 'praxly_if_block'
              }, 
              {
                'kind': 'block',
                'type': 'praxly_if_else_block'
              },
              {
                'kind': 'block',
                'type': 'praxly_boolean_operators_block', 
                'inputs': {
                  'A_OPERAND' : {
                    'shadow': {
                      'type' :'praxly_literal_block', 
                      'fields' : {
                        'LITERAL' : true,
                      }
                    },
                  }, 
                  'B_OPERAND' : {
                    'shadow': {
                      'type' :'praxly_literal_block', 
                      'fields' : {
                        'LITERAL' : false,
                      }
                    },
                  }
    
                  
                }
              }, 
              {
                'kind': 'block',
                'type': 'praxly_not_block'
              }, 
              {
                'kind': 'block',
                'type': 'praxly_compare_block',
                'inputs': {
                  'A_OPERAND' : {
                    'shadow': {
                      'type' :'praxly_literal_block', 
                      'fields' : {
                        'LITERAL' : 1,
                      }
                    },
                  }, 
                  'B_OPERAND' : {
                    'shadow': {
                      'type' :'praxly_literal_block', 
                      'fields' : {
                        'LITERAL' : 1,
                      }
                    },
                  }
    
                  
                }
              }
        ]
      },
      {
        "kind": "category",
        "name": "loops",
        "categorystyle": "loop_blocks",
        
        "contents": [
            {
                'kind': 'block',
                'type': 'praxly_for_loop_block', 
                'inputs': {
                  'INITIALIZATION': {
                    'block': {
                      'type': 'praxly_assignment_expression_block', 
                      'inputs' : {
                        'EXPRESSION': {
                          'shadow': {
                            'type' :'praxly_literal_block', 
                            'fields' : {
                              'LITERAL' : '0',
                            }
                          },
                        }

                      }
                    }
                  }, 
                  'CONDITION': {
                    'block' : {
                      'type': 'praxly_compare_block', 
                      'inputs': {
                        'A_OPERAND' : {
                          'block': {
                            'type' :'praxly_literal_block', 
                            'fields' : {
                              'LITERAL' : "i",
                            }
                          },
                        }, 
                        'B_OPERAND' : {
                          'block': {
                            'type' :'praxly_literal_block', 
                            'fields' : {
                              'LITERAL' : 1,
                            }
                          },
                        },                 
                      },
                      'fields': {
                        'OPERATOR': 'LESS_THAN'
                      }
                    }
                  }, 
                  'REASSIGNMENT': {
                    'block': {
                      'type': 'praxly_reassignment_expression_block', 
                      'inputs' : {
                        'EXPRESSION': {
                          'block' : {
                            'type': 'praxly_arithmetic_block',
                            'inputs': {
                              'A_OPERAND' : {
                                'shadow': {
                                  'type' :'praxly_variable_block', 
                                  'fields' : {
                                    'LITERAL' : "i",
                                  }
                                },
                              }, 
                              'B_OPERAND' : {
                                'shadow': {
                                  'type' :'praxly_literal_block', 
                                  'fields' : {
                                    'LITERAL' : 1,
                                  }
                                },
                              }
                            }
                        }
                      }
                      }
                    }
                  }, 
                }
              }, 
              {
                'kind': 'block',
                'type': 'praxly_while_loop_block'

              }, 
              {
                'kind': 'block',
                'type': 'praxly_do_while_loop_block'

              }, 
              {
                'kind': 'block',
                'type': 'praxly_repeat_until_loop_block'

              }
        ]
      },
      {
        "kind": "category",
        "name": "expressions",
        "categorystyle": "expression_blocks",
        "contents": [
          {
            'kind': 'block',
            'type': 'praxly_literal_block'
          },
          // {
          //   'kind': 'block',
          //   'type': 'praxly_String_block'
          // },
          {
            'kind': 'block',
            'type': 'praxly_arithmetic_block',
            'inputs': {
              'A_OPERAND' : {
                'shadow': {
                  'type' :'praxly_literal_block', 
                  'fields' : {
                    'LITERAL' : 1,
                  }
                },
              }, 
              'B_OPERAND' : {
                'shadow': {
                  'type' :'praxly_literal_block', 
                  'fields' : {
                    'LITERAL' : 1,
                  }
                },
              }

              
            }
            
          }, 
          
          {
            'kind': 'block',
            'type': 'praxly_null_block'
          }, 
          {
            'kind': 'block',
            'type': 'praxly_true_block'
          }, 
          {
            'kind': 'block',
            'type': 'praxly_false_block'
          }
        ]
      },
     
      {
        "kind": "category",
        "name": "Arrays",
        "categorystyle": "array_blocks",
        "contents": [
          {
            'kind': 'block',
            'type': 'custom_operation_block'
          },
          
             
        ]
      },
      {
        "kind": "category",
        "name": "classes",
        "categorystyle" : "class_blocks",
        // "categorystyle": "class_blocks",
        "contents": [
          
              {
                'kind': 'block',
                'type': 'praxly_class_block'
              }
              

        ]
      },
     
      {
        "kind": "category",
        "name": "Variables",
        "categorystyle": "variable_blocks",
        "contents": [
     
              {
                'kind': 'block',
                'type': 'praxly_assignment_block'
              }, 
              {
                'kind': 'block',
                'type': 'praxly_reassignment_block'
              }, 
              {
                'kind': 'block',
                'type': 'praxly_variable_block'
              }, 
             
              
        ]
      }, 
      {
        "kind": "category",
        "name": "Procedures",
        "categorystyle": "procedure_blocks",
        "contents": [
            {
                'kind': 'block',
                'type': 'praxly_procedure_block'
              }, 
              {
                'kind': 'block',
                'type': 'praxly_return_block'
              },
              {
                'kind': 'block',
                'type': 'praxly_print_block',
                'inputs': {
                  'EXPRESSION' : {
                    'shadow': {
                      'type' :'praxly_literal_block', 
                      'fields' : {
                        'LITERAL' : '\"hello, world\"',
                      }
                    },
                  }, 
                }
              }

        ]
      }, 
      {
        "kind": "category",
        "name": "common blocks",
        "categorystyle": "comment_blocks",
        "contents": [
            {
                'kind': 'block',
                'type': 'praxly_comment_block'
              }, 
              {
                'kind': 'block',
                'type': 'praxly_print_block',
                'inputs': {
                  'EXPRESSION' : {
                    'shadow': {
                      'type' :'praxly_literal_block', 
                      'fields' : {
                        'LITERAL' : '\"hello, world\"',
                      }
                    },
                  }, 
                }
              }
        ]
      }, 
      
      
    ]
  };


