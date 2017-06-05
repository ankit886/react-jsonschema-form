import Form from "./components/Form";

export default Form;

import React, { Component } from "react";
import { render } from "react-dom";

const schema = {
    "type": "object",
    "title": "GSTR1 Schema",
    "properties": {
        "gstin": {
            "description": "Supplier GSTIN",
            "$ref": "#/definitions/gstin"
        },
        "fp": {
            "description": "Financial Period",
            "type": "string",
            "minLength": 1
        },
        "gt": {
            "description": "Gross Turnover of the taxpayer in the previous FY",
            "type": "number",
            "maxLength": 15,
            "minLength": 2
        },
        "b2b": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "ctin": {
                        "description": "GSTIN/UID of the Receiver taxpayer/UN,Govt Bodies",
                        "$ref": "#/definitions/gstin"
                    },
                    "cfs": {
                        "description": "GSTR2 filing status of counter party",
                        "$ref": "#/definitions/boolean"
                    },
                    "inv": {
                        "type": "array",
                        "minLength": 1,
                        "items": {
                            "anyOf": [
                                {
                                    "type": "object",
                                    "properties": {
                                        "etin": {
                                            "description": "Ecom Tin",
                                            "$ref": "#/definitions/etin"
                                        },
                                        "updby": {
                                            "description": "Uploaded by",
                                            "$ref": "#/definitions/nonEmptyString"
                                        },
                                        "chksum": {
                                            "description": "Checksum Value",
                                            "$ref": "#/definitions/chksum"
                                        },
                                        "flag": {
                                            "description": "tax payer action",
                                            "$ref": "#/definitions/flag"
                                        },
                                        "inum": {
                                            "description": "Supplier Invoice Number",
                                            "$ref": "#/definitions/inum"
                                        },
                                        "idt": {
                                            "description": "Supplier Invoice Date",
                                            "$ref": "#/definitions/nonEmptydate"
                                        },
                                        "val": {
                                            "description": "Supplier Invoice Value",
                                            "$ref": "#/definitions/nonEmptyCost"
                                        },
                                        "pos": {
                                            "description": "Maintained in GST System common database POS as provided in law / actual provision of service.",
                                            "type": "string"
                                        },
                                        "rchrg": {
                                            "description": "Reverse Charge",
                                            "$ref": "#/definitions/boolean"
                                        },
                                        "prs": {
                                            "description": "Provisional assessment",
                                            "$ref": "#/definitions/boolean"
                                        },
                                        "od_num": {
                                            "description": "Order Number",
                                            "$ref": "#/definitions/inum"
                                        },
                                        "od_dt": {
                                            "description": "Order Date",
                                            "$ref": "#/definitions/nonEmptydate"
                                        },
                                        "itms": {
                                            "type": "array",
                                            "items": {
                                                "type": "object",
                                                "properties": {
                                                    "num": {
                                                        "description": "Serial no",
                                                        "type": "integer",
                                                        "minLength": 1
                                                    },
                                                    "itm_det": {
                                                        "type": "object",
                                                        "properties": {
                                                            "ty": {
                                                                "description": "Identifier if Goods or Services",
                                                                "type": "string",
                                                                "enum": [
                                                                    "G",
                                                                    "S"
                                                                ]
                                                            },
                                                            "hsn_sc": {
                                                                "description": "HSN or SAC of Goods or Services as per Invoice line items",
                                                                "type": "string"
                                                            },
                                                            "txval": {
                                                                "description": "Taxable value of Goods or Service as per invoice",
                                                                "$ref": "#/definitions/nonEmptyCost",
                                                                "minLength": 1
                                                            },
                                                            "irt": {
                                                                "description": "IGST Rate as per invoice",
                                                                "type": "number"
                                                            },
                                                            "iamt": {
                                                                "description": "IGST Amount as per invoice",
                                                                "type": "number"
                                                            },
                                                            "crt": {
                                                                "description": "CGST Rate as per invoice",
                                                                "type": "number"
                                                            },
                                                            "camt": {
                                                                "description": "CGST Amount as per invoice",
                                                                "type": "number"
                                                            },
                                                            "srt": {
                                                                "description": "SGST Rate as per invoice",
                                                                "type": "number"
                                                            },
                                                            "samt": {
                                                                "description": "SGST Amount as per invoice",
                                                                "type": "number"
                                                            },
                                                            "csrt": {
                                                                "description": "Cess Rate as per invoice",
                                                                "type": "number"
                                                            },
                                                            "csamt": {
                                                                "description": "Cess Amount as per invoice",
                                                                "type": "number"
                                                            }
                                                        },
                                                        "required": [
                                                            "ty",
                                                            "txval"
                                                        ]
                                                    }
                                                },
                                                "required": [
                                                    "num"
                                                ]
                                            }
                                        }
                                    },
                                    "required": [
                                        "inum",
                                        "idt",
                                        "val",
                                        "pos",
                                        "rchrg",
                                        "prs",
                                        "itms"
                                    ]
                                },
                                {
                                    "type": "object",
                                    "properties": {
                                        "updby": {
                                            "description": "Uploaded by",
                                            "$ref": "#/definitions/nonEmptyString"
                                        },
                                        "etin": {
                                            "description": "Ecom Tin",
                                            "$ref": "#/definitions/etin"
                                        },
                                        "chksum": {
                                            "description": "Checksum Value",
                                            "$ref": "#/definitions/chksum",
                                            "minLength": 1
                                        },
                                        "flag": {
                                            "description": "tax payer action",
                                            "type": "string",
                                            "enum": [
                                                "D"
                                            ]
                                        },
                                        "inum": {
                                            "description": "Supplier Invoice Number",
                                            "$ref": "#/definitions/inum"
                                        },
                                        "idt": {
                                            "description": "Supplier Invoice Date",
                                            "$ref": "#/definitions/nonEmptydate"
                                        },
                                        "val": {
                                            "description": "Supplier Invoice Value",
                                            "type": "number"
                                        },
                                        "pos": {
                                            "description": "Maintained in GST System common database POS as provided in law / actual provision of service.",
                                            "type": "string"
                                        },
                                        "rchrg": {
                                            "description": "Reverse Charge",
                                            "$ref": "#/definitions/boolean"
                                        },
                                        "prs": {
                                            "description": "Provisional assessment",
                                            "$ref": "#/definitions/boolean"
                                        },
                                        "od_num": {
                                            "description": "Order Number",
                                            "$ref": "#/definitions/inum"
                                        },
                                        "od_dt": {
                                            "description": "Order Date",
                                            "$ref": "#/definitions/nonEmptydate"
                                        },
                                        "itms": {
                                            "type": "array",
                                            "items": {
                                                "type": "object",
                                                "properties": {
                                                    "num": {
                                                        "description": "Serial no",
                                                        "type": "integer",
                                                        "minLength": 1
                                                    },
                                                    "itm_det": {
                                                        "type": "object",
                                                        "properties": {
                                                            "ty": {
                                                                "description": "Identifier if Goods or Services",
                                                                "type": "string",
                                                                "enum": [
                                                                    "G",
                                                                    "S"
                                                                ]
                                                            },
                                                            "hsn_sc": {
                                                                "description": "HSN or SAC of Goods or Services as per Invoice line items",
                                                                "type": "string"
                                                            },
                                                            "txval": {
                                                                "description": "Taxable value of Goods or Service as per invoice",
                                                                "type": "number",
                                                                "minLength": 1
                                                            },
                                                            "irt": {
                                                                "description": "IGST Rate as per invoice",
                                                                "type": "number"
                                                            },
                                                            "iamt": {
                                                                "description": "IGST Amount as per invoice",
                                                                "type": "number"
                                                            },
                                                            "crt": {
                                                                "description": "CGST Rate as per invoice",
                                                                "type": "number"
                                                            },
                                                            "camt": {
                                                                "description": "CGST Amount as per invoice",
                                                                "type": "number"
                                                            },
                                                            "srt": {
                                                                "description": "SGST Rate as per invoice",
                                                                "type": "number"
                                                            },
                                                            "samt": {
                                                                "description": "SGST Amount as per invoice",
                                                                "type": "number"
                                                            },
                                                            "csrt": {
                                                                "description": "Cess Rate as per invoice",
                                                                "type": "number"
                                                            },
                                                            "csamt": {
                                                                "description": "Cess Amount as per invoice",
                                                                "type": "number"
                                                            }
                                                        },
                                                        "required": [
                                                            "ty",
                                                            "txval"
                                                        ]
                                                    }
                                                },
                                                "required": [
                                                    "num"
                                                ]
                                            }
                                        }
                                    },
                                    "required": [
                                        "inum",
                                        "idt",
                                        "flag",
                                        "chksum"
                                    ]
                                }
                            ]
                        }
                    }
                },
                "required": [
                    "ctin",
                    "inv"
                ]
            }
        },
        "cdnur": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "chksum": {
                        "description": "Invoice Check sum value",
                        "type": "string"
                    },
                    "mon": {
                        "description": "month of Credit/ Debit",
                        "type": "string"
                    },
                    "cname": {
                        "description": "Name of Recipient",
                        "type": "string"
                    },
                    "ntty": {
                        "description": "Credit/debit note type",
                        "type": "string"
                    },
                    "state_cd": {
                        "description": "state code",
                        "type": "string"
                    },
                    "rsn": {
                        "description": "Reason Code for issuing Debit/Credit Note",
                        "type": "string"
                    },
                    "val": {
                        "description": "Supplier Invoice Value",
                        "type": "number"
                    },
                    "irt": {
                        "description": "IGST Rate as per invoice",
                        "type": "number"
                    },
                    "iamt": {
                        "description": "IGST Amount as per invoice",
                        "type": "number"
                    },
                    "crt": {
                        "description": "CGST Rate as per invoice",
                        "type": "number"
                    },
                    "camt": {
                        "description": "CGST Amount as per invoice",
                        "type": "number"
                    },
                    "srt": {
                        "description": "SGST Rate as per invoice",
                        "type": "number"
                    },
                    "samt": {
                        "description": "SGST Amount as per invoice",
                        "type": "number"
                    },
                    "csrt": {
                        "description": "Cess Rate as per invoice",
                        "type": "number"
                    },
                    "csamt": {
                        "description": "Cess Amount as per invoice",
                        "type": "number"
                    },
                    "etin": {
                        "description": "Ecommerce Gstin",
                        "type": "string",
                        "maxLength": 15,
                        "minLength": 15
                    }
                },
                "required": [
                    "mon",
                    "ntty",
                    "rsn",
                    "val",
                    "state_cd"
                ]
            }
        },
        "cdnura": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "chksum": {
                        "description": "Invoice Check sum value",
                        "type": "string"
                    },
                    "omon": {
                        "description": "Original month of Credit/ Debit",
                        "type": "string"
                    },
                    "ocname": {
                        "description": "Original Name of Recipient",
                        "type": "string"
                    },
                    "mon": {
                        "description": "month of Credit/ Debit",
                        "type": "string"
                    },
                    "cname": {
                        "description": "Name of Recipient",
                        "type": "string"
                    },
                    "state_cd": {
                        "description": "state code",
                        "type": "string"
                    },
                    "ntty": {
                        "description": "Credit/debit note type",
                        "type": "string"
                    },
                    "rsn": {
                        "description": "Reason Code for issuing Debit/Credit Note",
                        "type": "string"
                    },
                    "val": {
                        "description": "Supplier Invoice Value",
                        "type": "number"
                    },
                    "irt": {
                        "description": "IGST Rate as per invoice",
                        "type": "number"
                    },
                    "iamt": {
                        "description": "IGST Amount as per invoice",
                        "type": "number"
                    },
                    "crt": {
                        "description": "CGST Rate as per invoice",
                        "type": "number"
                    },
                    "camt": {
                        "description": "CGST Amount as per invoice",
                        "type": "number"
                    },
                    "srt": {
                        "description": "SGST Rate as per invoice",
                        "type": "number"
                    },
                    "samt": {
                        "description": "SGST Amount as per invoice",
                        "type": "number"
                    },
                    "csrt": {
                        "description": "Cess Rate as per invoice",
                        "type": "number"
                    },
                    "csamt": {
                        "description": "Cess Amount as per invoice",
                        "type": "number"
                    },
                    "etin": {
                        "description": "Ecommerce Gstin",
                        "type": "string",
                        "maxLength": 15,
                        "minLength": 15
                    }
                },
                "required": [
                    "chksum",
                    "omon",
                    "ocname",
                    "mon",
                    "cname",
                    "ntty",
                    "rsn",
                    "val",
                    "state_cd"
                ]
            }
        }
        ,
        "b2ba": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "ctin": {
                        "description": "GSTIN/UID of the Receiver taxpayer/UN,Govt Bodies",
                        "$ref": "#/definitions/gstin"
                    },
                    "cfs": {
                        "description": "GSTR2 filing status of counter party",
                        "$ref": "#/definitions/boolean"
                    },
                    "inv": {
                        "minLength": 1,
                        "type": "array",
                        "items": {
                            "anyOf": [
                                {
                                    "type": "object",
                                    "properties": {
                                        "etin": {
                                            "description": "Ecom Tin",
                                            "$ref": "#/definitions/etin"
                                        },
                                        "chksum": {
                                            "description": "Checksum Value",
                                            "$ref": "#/definitions/chksum"
                                        },
                                        "updby": {
                                            "description": "Uploaded by",
                                            "$ref": "#/definitions/nonEmptyString"
                                        },
                                        "flag": {
                                            "description": "tax payer action",
                                            "$ref": "#/definitions/flag"
                                        },
                                        "inum": {
                                            "description": "Supplier Invoice Number",
                                            "$ref": "#/definitions/inum"
                                        },
                                        "idt": {
                                            "description": "Supplier Invoice Date",
                                            "$ref": "#/definitions/nonEmptydate"
                                        },
                                        "val": {
                                            "description": "Supplier Invoice Value",
                                            "minLength": 1,
                                            "type": "number"
                                        },
                                        "pos": {
                                            "description": "Maintained in GST System common database POS as provided in law / actual provision of service.",
                                            "minLength": 1,
                                            "type": "string"
                                        },
                                        "rchrg": {
                                            "description": "Reverse Charge",
                                            "$ref": "#/definitions/boolean"
                                        },
                                        "oinum": {
                                            "description": "Original invoice number",
                                            "$ref": "#/definitions/inum"
                                        },
                                        "oidt": {
                                            "description": "Original invoice date",
                                            "$ref": "#/definitions/nonEmptydate"
                                        },
                                        "prs": {
                                            "description": "Provisional assessment",
                                            "$ref": "#/definitions/boolean"
                                        },
                                        "od_num": {
                                            "description": "Order Number",
                                            "$ref": "#/definitions/inum"
                                        },
                                        "od_dt": {
                                            "description": "Order Date",
                                            "$ref": "#/definitions/nonEmptydate"
                                        },
                                        "itms": {
                                            "type": "array",
                                            "items": {
                                                "type": "object",
                                                "properties": {
                                                    "num": {
                                                        "description": "Serial no",
                                                        "type": "integer",
                                                        "minLength": 1
                                                    },
                                                    "itm_det": {
                                                        "type": "object",
                                                        "properties": {
                                                            "ty": {
                                                                "description": "Identifier if Goods or Services",
                                                                "type": "string",
                                                                "enum": [
                                                                    "G",
                                                                    "S"
                                                                ]
                                                            },
                                                            "hsn_sc": {
                                                                "description": "HSN or SAC of Goods or Services as per Invoice line items",
                                                                "type": "string"
                                                            },
                                                            "txval": {
                                                                "description": "Taxable value of Goods or Service as per invoice",
                                                                "type": "number",
                                                                "minLength": 1
                                                            },
                                                            "irt": {
                                                                "description": "IGST Rate as per invoice",
                                                                "type": "number"
                                                            },
                                                            "iamt": {
                                                                "description": "IGST Amount as per invoice",
                                                                "type": "number"
                                                            },
                                                            "crt": {
                                                                "description": "CGST Rate as per invoice",
                                                                "type": "number"
                                                            },
                                                            "camt": {
                                                                "description": "CGST Amount as per invoice",
                                                                "type": "number"
                                                            },
                                                            "srt": {
                                                                "description": "SGST Rate as per invoice",
                                                                "type": "number"
                                                            },
                                                            "samt": {
                                                                "description": "SGST Amount as per invoice",
                                                                "type": "number"
                                                            },
                                                            "csrt": {
                                                                "description": "Cess Rate as per invoice",
                                                                "type": "number"
                                                            },
                                                            "csamt": {
                                                                "description": "Cess Amount as per invoice",
                                                                "type": "number"
                                                            }
                                                        },
                                                        "required": [
                                                            "ty",
                                                            "txval"
                                                        ]
                                                    }
                                                },
                                                "required": [
                                                    "num"
                                                ]
                                            }
                                        }
                                    },
                                    "required": [
                                        "inum",
                                        "idt",
                                        "val",
                                        "pos",
                                        "rchrg",
                                        "oinum",
                                        "oidt",
                                        "prs",
                                        "itms"
                                    ]
                                },
                                {
                                    "type": "object",
                                    "properties": {
                                        "updby": {
                                            "description": "Uploaded by",
                                            "$ref": "#/definitions/nonEmptyString"
                                        },
                                        "etin": {
                                            "description": "Ecom Tin",
                                            "$ref": "#/definitions/etin"
                                        },
                                        "chksum": {
                                            "description": "Checksum Value",
                                            "minLength": 1,
                                            "$ref": "#/definitions/chksum"
                                        },
                                        "flag": {
                                            "description": "tax payer action",
                                            "type": "string",
                                            "enum": [
                                                "D"
                                            ]
                                        },
                                        "inum": {
                                            "description": "Supplier Invoice Number",
                                            "$ref": "#/definitions/inum"
                                        },
                                        "idt": {
                                            "description": "Supplier Invoice Date",
                                            "$ref": "#/definitions/nonEmptydate"
                                        },
                                        "val": {
                                            "description": "Supplier Invoice Value",
                                            "type": "number"
                                        },
                                        "pos": {
                                            "description": "Maintained in GST System common database POS as provided in law / actual provision of service.",
                                            "type": "string"
                                        },
                                        "rchrg": {
                                            "description": "Reverse Charge",
                                            "$ref": "#/definitions/boolean"
                                        },
                                        "oinum": {
                                            "description": "Original invoice number",
                                            "type": "string",
                                            "pattern": "^[a-zA-Z0-9]+$"
                                        },
                                        "oidt": {
                                            "description": "Original invoice date",
                                            "$ref": "#/definitions/nonEmptydate"
                                        },
                                        "prs": {
                                            "description": "Provisional assessment",
                                            "$ref": "#/definitions/boolean"
                                        },
                                        "od_num": {
                                            "description": "Order Number",
                                            "$ref": "#/definitions/inum"
                                        },
                                        "od_dt": {
                                            "description": "Order Date",
                                            "$ref": "#/definitions/nonEmptydate"
                                        },
                                        "itms": {
                                            "type": "array",
                                            "items": {
                                                "type": "object",
                                                "properties": {
                                                    "num": {
                                                        "description": "Serial no",
                                                        "type": "integer",
                                                        "minLength": 1
                                                    },
                                                    "itm_det": {
                                                        "type": "object",
                                                        "properties": {
                                                            "ty": {
                                                                "description": "Identifier if Goods or Services",
                                                                "type": "string",
                                                                "enum": [
                                                                    "G",
                                                                    "S"
                                                                ]
                                                            },
                                                            "hsn_sc": {
                                                                "description": "HSN or SAC of Goods or Services as per Invoice line items",
                                                                "type": "string"
                                                            },
                                                            "txval": {
                                                                "description": "Taxable value of Goods or Service as per invoice",
                                                                "type": "number",
                                                                "minLength": 1
                                                            },
                                                            "irt": {
                                                                "description": "IGST Rate as per invoice",
                                                                "type": "number"
                                                            },
                                                            "iamt": {
                                                                "description": "IGST Amount as per invoice",
                                                                "type": "number"
                                                            },
                                                            "crt": {
                                                                "description": "CGST Rate as per invoice",
                                                                "type": "number"
                                                            },
                                                            "camt": {
                                                                "description": "CGST Amount as per invoice",
                                                                "type": "number"
                                                            },
                                                            "srt": {
                                                                "description": "SGST Rate as per invoice",
                                                                "type": "number"
                                                            },
                                                            "samt": {
                                                                "description": "SGST Amount as per invoice",
                                                                "type": "number"
                                                            },
                                                            "csrt": {
                                                                "description": "Cess Rate as per invoice",
                                                                "type": "number"
                                                            },
                                                            "csamt": {
                                                                "description": "Cess Amount as per invoice",
                                                                "type": "number"
                                                            }
                                                        },
                                                        "required": [
                                                            "ty",
                                                            "txval"
                                                        ]
                                                    }
                                                },
                                                "required": [
                                                    "num"
                                                ]
                                            }
                                        }
                                    },
                                    "required": [
                                        "inum",
                                        "idt",
                                        "flag",
                                        "chksum"
                                    ]
                                }
                            ]
                        }
                    }
                },
                "required": [
                    "ctin",
                    "inv"
                ]
            }
        },
        "b2cl": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "state_cd": {
                        "description": "Recipient state code",
                        "$ref": "#/definitions/state_cd"
                    },
                    "inv": {
                        "minLength": 1,
                        "type": "array",
                        "items": {
                            "anyOf": [
                                {
                                    "type": "object",
                                    "properties": {
                                        "etin": {
                                            "description": "Ecom Tin",
                                            "$ref": "#/definitions/etin"
                                        },
                                        "chksum": {
                                            "description": "Checksum Value",
                                            "$ref": "#/definitions/chksum"
                                        },
                                        "flag": {
                                            "description": "tax payer action",
                                            "$ref": "#/definitions/flag"
                                        },
                                        "cname": {
                                            "type": "string",
                                            "description": "Counter party Name",
                                            "maxLength": 100,
                                            "minLength": 1
                                        },
                                        "inum": {
                                            "description": "Supplier Invoice Number",
                                            "$ref": "#/definitions/inum"
                                        },
                                        "idt": {
                                            "description": "Supplier Invoice Date",
                                            "$ref": "#/definitions/nonEmptydate"
                                        },
                                        "val": {
                                            "description": "Supplier Invoice Value",
                                            "type": "number"
                                        },
                                        "pos": {
                                            "description": "Maintained in GST System common database POS as provided in law / actual provision of service",
                                            "type": "string"
                                        },
                                        "prs": {
                                            "description": "Provisional assessment",
                                            "$ref": "#/definitions/boolean"
                                        },
                                        "od_num": {
                                            "description": "Order Number",
                                            "$ref": "#/definitions/inum"
                                        },
                                        "od_dt": {
                                            "description": "Order Date",
                                            "$ref": "#/definitions/nonEmptydate"
                                        },
                                        "itms": {
                                            "type": "array",
                                            "items": {
                                                "type": "object",
                                                "properties": {
                                                    "num": {
                                                        "description": "Serial no",
                                                        "type": "integer",
                                                        "minLength": 1
                                                    },
                                                    "itm_det": {
                                                        "type": "object",
                                                        "properties": {
                                                            "ty": {
                                                                "description": "Identifier if Goods or Services",
                                                                "type": "string",
                                                                "enum": [
                                                                    "G",
                                                                    "S"
                                                                ]
                                                            },
                                                            "hsn_sc": {
                                                                "description": "HSN or SAC of Goods or Services as per Invoice line items",
                                                                "type": "string"
                                                            },
                                                            "txval": {
                                                                "description": "Taxable value of Goods or Service as per invoice",
                                                                "type": "number",
                                                                "minLength": 1
                                                            },
                                                            "irt": {
                                                                "description": "IGST Rate as per invoice",
                                                                "type": "number"
                                                            },
                                                            "iamt": {
                                                                "description": "IGST Amount as per invoice",
                                                                "type": "number"
                                                            },
                                                            "crt": {
                                                                "description": "CGST Rate as per invoice",
                                                                "type": "number"
                                                            },
                                                            "camt": {
                                                                "description": "CGST Amount as per invoice",
                                                                "type": "number"
                                                            },
                                                            "srt": {
                                                                "description": "SGST Rate as per invoice",
                                                                "type": "number"
                                                            },
                                                            "samt": {
                                                                "description": "SGST Amount as per invoice",
                                                                "type": "number"
                                                            },
                                                            "csrt": {
                                                                "description": "Cess Rate as per invoice",
                                                                "type": "number"
                                                            },
                                                            "csamt": {
                                                                "description": "Cess Amount as per invoice",
                                                                "type": "number"
                                                            }
                                                        },
                                                        "required": [
                                                            "ty",
                                                            "txval"
                                                        ]
                                                    }
                                                },
                                                "required": [
                                                    "num"
                                                ]
                                            }
                                        }
                                    },
                                    "required": [
                                        "cname",
                                        "inum",
                                        "idt",
                                        "val",
                                        "pos",
                                        "prs",
                                        "itms"
                                    ]
                                },
                                {
                                    "type": "object",
                                    "properties": {
                                        "etin": {
                                            "description": "Ecom Tin",
                                            "$ref": "#/definitions/etin"
                                        },
                                        "chksum": {
                                            "description": "Checksum Value",
                                            "$ref": "#/definitions/chksum"
                                        },
                                        "flag": {
                                            "description": "tax payer action",
                                            "type": "string",
                                            "enum": [
                                                "D"
                                            ]
                                        },
                                        "cname": {
                                            "type": "string",
                                            "description": "Counter party Name",
                                            "minLength": 1,
                                            "maxLength": 100
                                        },
                                        "inum": {
                                            "description": "Supplier Invoice Number",
                                            "$ref": "#/definitions/inum"
                                        },
                                        "idt": {
                                            "description": "Supplier Invoice Date",
                                            "$ref": "#/definitions/nonEmptydate"
                                        },
                                        "val": {
                                            "description": "Supplier Invoice Value",
                                            "type": "number"
                                        },
                                        "pos": {
                                            "description": "Maintained in GST System common database POS as provided in law / actual provision of service",
                                            "type": "string"
                                        },
                                        "prs": {
                                            "description": "Provisional assessment",
                                            "$ref": "#/definitions/boolean"
                                        },
                                        "od_num": {
                                            "description": "Order Number",
                                            "$ref": "#/definitions/inum"
                                        },
                                        "od_dt": {
                                            "description": "Order Date",
                                            "$ref": "#/definitions/nonEmptydate"
                                        },
                                        "itms": {
                                            "type": "array",
                                            "items": {
                                                "type": "object",
                                                "properties": {
                                                    "num": {
                                                        "description": "Serial no",
                                                        "type": "integer",
                                                        "minLength": 1
                                                    },
                                                    "itm_det": {
                                                        "type": "object",
                                                        "properties": {
                                                            "ty": {
                                                                "description": "Identifier if Goods or Services",
                                                                "type": "string",
                                                                "enum": [
                                                                    "G",
                                                                    "S"
                                                                ]
                                                            },
                                                            "hsn_sc": {
                                                                "description": "HSN or SAC of Goods or Services as per Invoice line items",
                                                                "type": "string"
                                                            },
                                                            "txval": {
                                                                "description": "Taxable value of Goods or Service as per invoice",
                                                                "type": "number",
                                                                "minLength": 1
                                                            },
                                                            "irt": {
                                                                "description": "IGST Rate as per invoice",
                                                                "type": "number"
                                                            },
                                                            "iamt": {
                                                                "description": "IGST Amount as per invoice",
                                                                "type": "number"
                                                            },
                                                            "crt": {
                                                                "description": "CGST Rate as per invoice",
                                                                "type": "number"
                                                            },
                                                            "camt": {
                                                                "description": "CGST Amount as per invoice",
                                                                "type": "number"
                                                            },
                                                            "srt": {
                                                                "description": "SGST Rate as per invoice",
                                                                "type": "number"
                                                            },
                                                            "samt": {
                                                                "description": "SGST Amount as per invoice",
                                                                "type": "number"
                                                            },
                                                            "csrt": {
                                                                "description": "Cess Rate as per invoice",
                                                                "type": "number"
                                                            },
                                                            "csamt": {
                                                                "description": "Cess Amount as per invoice",
                                                                "type": "number"
                                                            }
                                                        },
                                                        "required": [
                                                            "ty",
                                                            "txval"
                                                        ]
                                                    }
                                                },
                                                "required": [
                                                    "num"
                                                ]
                                            }
                                        }
                                    },
                                    "required": [
                                        "inum",
                                        "idt",
                                        "flag",
                                        "chksum"
                                    ]
                                }
                            ]
                        }
                    }
                },
                "required": [
                    "state_cd",
                    "inv"
                ]
            }
        },
        "b2cla": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "state_cd": {
                        "description": "Recipient state code",
                        "$ref": "#/definitions/state_cd"
                    },
                    "inv": {
                        "minLength": 1,
                        "type": "array",
                        "items": {
                            "anyOf": [
                                {
                                    "type": "object",
                                    "properties": {
                                        "etin": {
                                            "description": "Ecom Tin",
                                            "$ref": "#/definitions/etin"
                                        },
                                        "chksum": {
                                            "description": "Checksum Value",
                                            "$ref": "#/definitions/chksum"
                                        },
                                        "flag": {
                                            "description": "tax payer action",
                                            "$ref": "#/definitions/flag"
                                        },
                                        "cname": {
                                            "type": "string",
                                            "description": "Counterparty Name",
                                            "maxLength": 100,
                                            "minLength": 1
                                        },
                                        "inum": {
                                            "description": "Supplier Invoice Number",
                                            "$ref": "#/definitions/inum"
                                        },
                                        "idt": {
                                            "description": "Revised Supplier Invoice Date",
                                            "$ref": "#/definitions/nonEmptydate"
                                        },
                                        "val": {
                                            "description": "Revised Supplier Invoice Value",
                                            "type": "number"
                                        },
                                        "pos": {
                                            "description": "Maintained in GST System common database POS as provided in law / actual provision of service",
                                            "type": "string"
                                        },
                                        "prs": {
                                            "description": "Provisional assessment",
                                            "$ref": "#/definitions/boolean"
                                        },
                                        "od_num": {
                                            "description": "Order Number",
                                            "$ref": "#/definitions/inum"
                                        },
                                        "od_dt": {
                                            "description": "Order Date",
                                            "$ref": "#/definitions/nonEmptydate"
                                        },
                                        "oinum": {
                                            "description": "Original invoice number",
                                            "$ref": "#/definitions/nonEmptyString"
                                        },
                                        "oidt": {
                                            "description": "Original invoice date",
                                            "$ref": "#/definitions/nonEmptydate"
                                        },
                                        "itms": {
                                            "type": "array",
                                            "items": {
                                                "type": "object",
                                                "properties": {
                                                    "num": {
                                                        "description": "Serial no",
                                                        "type": "integer",
                                                        "minLength": 1
                                                    },
                                                    "itm_det": {
                                                        "type": "object",
                                                        "properties": {
                                                            "ty": {
                                                                "description": "Identifier if Goods or Services",
                                                                "type": "string",
                                                                "enum": [
                                                                    "G",
                                                                    "S"
                                                                ]
                                                            },
                                                            "hsn_sc": {
                                                                "description": "HSN or SAC of Goods or Services as per Invoice line items",
                                                                "type": "string"
                                                            },
                                                            "txval": {
                                                                "description": "Taxable value of Goods or Service as per invoice",
                                                                "type": "number",
                                                                "minLength": 1
                                                            },
                                                            "irt": {
                                                                "description": "IGST Rate as per invoice",
                                                                "type": "number"
                                                            },
                                                            "iamt": {
                                                                "description": "IGST Amount as per invoice",
                                                                "type": "number"
                                                            },
                                                            "crt": {
                                                                "description": "CGST Rate as per invoice",
                                                                "type": "number"
                                                            },
                                                            "camt": {
                                                                "description": "CGST Amount as per invoice",
                                                                "type": "number"
                                                            },
                                                            "srt": {
                                                                "description": "SGST Rate as per invoice",
                                                                "type": "number"
                                                            },
                                                            "samt": {
                                                                "description": "SGST Amount as per invoice",
                                                                "type": "number"
                                                            },
                                                            "csrt": {
                                                                "description": "Cess Rate as per invoice",
                                                                "type": "number"
                                                            },
                                                            "csamt": {
                                                                "description": "Cess Amount as per invoice",
                                                                "type": "number"
                                                            }
                                                        },
                                                        "required": [
                                                            "ty",
                                                            "txval"
                                                        ]
                                                    }
                                                },
                                                "required": [
                                                    "num"
                                                ]
                                            }
                                        }
                                    },
                                    "required": [
                                        "cname",
                                        "inum",
                                        "idt",
                                        "val",
                                        "pos",
                                        "prs",
                                        "oinum",
                                        "oidt",
                                        "itms"
                                    ]
                                },
                                {
                                    "type": "object",
                                    "properties": {
                                        "etin": {
                                            "description": "Ecom Tin",
                                            "$ref": "#/definitions/etin"
                                        },
                                        "chksum": {
                                            "description": "Checksum Value",
                                            "$ref": "#/definitions/chksum"
                                        },
                                        "flag": {
                                            "description": "tax payer action",
                                            "type": "string",
                                            "enum": [
                                                "D"
                                            ]
                                        },
                                        "cname": {
                                            "type": "string",
                                            "description": "Counterparty Name",
                                            "maxLength": 100
                                        },
                                        "inum": {
                                            "description": "Supplier Invoice Number",
                                            "$ref": "#/definitions/inum"
                                        },
                                        "idt": {
                                            "description": "Revised Supplier Invoice Date",
                                            "$ref": "#/definitions/nonEmptydate"
                                        },
                                        "val": {
                                            "description": "Revised Supplier Invoice Value",
                                            "type": "number"
                                        },
                                        "pos": {
                                            "description": "Maintained in GST System common database POS as provided in law / actual provision of service",
                                            "type": "string"
                                        },
                                        "prs": {
                                            "description": "Provisional assessment",
                                            "$ref": "#/definitions/boolean"
                                        },
                                        "od_num": {
                                            "description": "Order Number",
                                            "$ref": "#/definitions/inum"
                                        },
                                        "od_dt": {
                                            "description": "Order Date",
                                            "$ref": "#/definitions/nonEmptydate"
                                        },
                                        "oinum": {
                                            "description": "Original invoice number",
                                            "type": "string",
                                            "pattern": "^[a-zA-Z0-9]+$"
                                        },
                                        "oidt": {
                                            "description": "Original invoice date",
                                            "$ref": "#/definitions/nonEmptydate"
                                        },
                                        "itms": {
                                            "type": "array",
                                            "items": {
                                                "type": "object",
                                                "properties": {
                                                    "num": {
                                                        "description": "Serial no",
                                                        "type": "integer",
                                                        "minLength": 1
                                                    },
                                                    "itm_det": {
                                                        "type": "object",
                                                        "properties": {
                                                            "ty": {
                                                                "description": "Identifier if Goods or Services",
                                                                "type": "string",
                                                                "enum": [
                                                                    "G",
                                                                    "S"
                                                                ]
                                                            },
                                                            "hsn_sc": {
                                                                "description": "HSN or SAC of Goods or Services as per Invoice line items",
                                                                "type": "string"
                                                            },
                                                            "txval": {
                                                                "description": "Taxable value of Goods or Service as per invoice",
                                                                "type": "number",
                                                                "minLength": 1
                                                            },
                                                            "irt": {
                                                                "description": "IGST Rate as per invoice",
                                                                "type": "number"
                                                            },
                                                            "iamt": {
                                                                "description": "IGST Amount as per invoice",
                                                                "type": "number"
                                                            },
                                                            "crt": {
                                                                "description": "CGST Rate as per invoice",
                                                                "type": "number"
                                                            },
                                                            "camt": {
                                                                "description": "CGST Amount as per invoice",
                                                                "type": "number"
                                                            },
                                                            "srt": {
                                                                "description": "SGST Rate as per invoice",
                                                                "type": "number"
                                                            },
                                                            "samt": {
                                                                "description": "SGST Amount as per invoice",
                                                                "type": "number"
                                                            },
                                                            "csrt": {
                                                                "description": "Cess Rate as per invoice",
                                                                "type": "number"
                                                            },
                                                            "csamt": {
                                                                "description": "Cess Amount as per invoice",
                                                                "type": "number"
                                                            }
                                                        },
                                                        "required": [
                                                            "ty",
                                                            "txval"
                                                        ]
                                                    }
                                                },
                                                "required": [
                                                    "num"
                                                ]
                                            }
                                        }
                                    },
                                    "required": [
                                        "inum",
                                        "idt",
                                        "flag",
                                        "chksum"
                                    ]
                                }
                            ]
                        }
                    }
                },
                "required": [
                    "state_cd",
                    "inv"
                ]
            }
        },
        "b2cs": {
            "type": "array",
            "items": {
                "anyOf": [
                    {
                        "type": "object",
                        "properties": {
                            "typ": {
                                "description": "Type of B2cs",
                                "type": "string",
                                "enum": [
                                    "E",
                                    "OE"
                                ]
                            },
                            "etin": {
                                "description": "Ecom Tin",
                                "$ref": "#/definitions/etin"
                            },
                            "chksum": {
                                "description": "Checksum Value",
                                "$ref": "#/definitions/chksum"
                            },
                            "flag": {
                                "description": "tax payer action",
                                "$ref": "#/definitions/flag"
                            },
                            "state_cd": {
                                "description": "Recipient state code",
                                "$ref": "#/definitions/state_cd"
                            },
                            "ty": {
                                "description": "Identifier if Goods or Services",
                                "type": "string",
                                "enum": [
                                    "G",
                                    "S"
                                ]
                            },
                            "hsn_sc": {
                                "description": "HSN or SAC of Goods or Services as per Invoice line items",
                                "type": "string",
                                "pattern": "^[a-zA-Z0-9]+$"
                            },
                            "txval": {
                                "description": "Taxable value of Goods or Service as per invoice",
                                "minLength": 1,
                                "type": "number"
                            },
                            "irt": {
                                "description": "IGST Rate as per invoice",
                                "type": "number"
                            },
                            "iamt": {
                                "description": "IGST Amount as per invoice",
                                "type": "number"
                            },
                            "crt": {
                                "description": "CGST Rate as per invoice",
                                "type": "number"
                            },
                            "camt": {
                                "description": "CGST Amount as per invoice",
                                "type": "number"
                            },
                            "srt": {
                                "description": "SGST Rate as per invoice",
                                "type": "number"
                            },
                            "samt": {
                                "description": "SGST Amount as per invoice",
                                "type": "number"
                            },
                            "csrt": {
                                "description": "Cess Rate as per invoice",
                                "type": "number"
                            },
                            "csamt": {
                                "description": "Cess Amount as per invoice",
                                "type": "number"
                            },
                            "prs": {
                                "description": "Provisional assessment",
                                "$ref": "#/definitions/boolean"
                            },
                            "od_num": {
                                "description": "Order Number",
                                "$ref": "#/definitions/inum"
                            },
                            "od_dt": {
                                "description": "Order Date",
                                "$ref": "#/definitions/nonEmptydate"
                            }
                        },
                        "required": [
                            "state_cd",
                            "ty",
                            "typ",
                            "txval"
                        ]
                    },
                    {
                        "type": "object",
                        "properties": {
                            "typ": {
                                "description": "Type of B2cs",
                                "type": "string",
                                "enum": [
                                    "E",
                                    "OE"
                                ]
                            },
                            "etin": {
                                "description": "Ecom Tin",
                                "$ref": "#/definitions/etin"
                            },
                            "chksum": {
                                "description": "Checksum Value",
                                "$ref": "#/definitions/chksum"
                            },
                            "flag": {
                                "description": "tax payer action",
                                "type": "string",
                                "enum": [
                                    "D"
                                ]
                            },
                            "state_cd": {
                                "description": "Recipient state code",
                                "$ref": "#/definitions/state_cd"
                            },
                            "ty": {
                                "description": "Identifier if Goods or Services",
                                "type": "string",
                                "enum": [
                                    "G",
                                    "S"
                                ]
                            },
                            "hsn_sc": {
                                "description": "HSN or SAC of Goods or Services as per Invoice line items",
                                "type": "string",
                                "pattern": "^[a-zA-Z0-9]+$"
                            },
                            "txval": {
                                "description": "Taxable value of Goods or Service as per invoice",
                                "minLength": 1,
                                "type": "number"
                            },
                            "irt": {
                                "description": "IGST Rate as per invoice",
                                "type": "number"
                            },
                            "iamt": {
                                "description": "IGST Amount as per invoice",
                                "type": "number"
                            },
                            "crt": {
                                "description": "CGST Rate as per invoice",
                                "type": "number"
                            },
                            "camt": {
                                "description": "CGST Amount as per invoice",
                                "type": "number"
                            },
                            "srt": {
                                "description": "SGST Rate as per invoice",
                                "type": "number"
                            },
                            "samt": {
                                "description": "SGST Amount as per invoice",
                                "type": "number"
                            },
                            "csrt": {
                                "description": "Cess Rate as per invoice",
                                "type": "number"
                            },
                            "csamt": {
                                "description": "Cess Amount as per invoice",
                                "type": "number"
                            },
                            "prs": {
                                "description": "Provisional assessment",
                                "$ref": "#/definitions/boolean"
                            },
                            "od_num": {
                                "description": "Order Number",
                                "$ref": "#/definitions/inum"
                            },
                            "od_dt": {
                                "description": "Order Date",
                                "$ref": "#/definitions/nonEmptydate"
                            }
                        },
                        "required": [
                            "state_cd",
                            "flag",
                            "ty",
                            "typ",
                            "chksum"
                        ]
                    }
                ]
            }
        },
        "b2csa": {
            "type": "array",
            "items": {
                "anyOf": [
                    {
                        "type": "object",
                        "properties": {
                            "typ": {
                                "description": "Type of B2cs",
                                "type": "string",
                                "enum": [
                                    "E",
                                    "OE"
                                ]
                            },
                            "etin": {
                                "description": "Ecom Tin",
                                "$ref": "#/definitions/etin"
                            },
                            "osupst_cd": {
                                "description": "Recipient state code",
                                "$ref": "#/definitions/state_cd"
                            },
                            "omon": {
                                "description": "Month",
                                "type": "string",
                                "minLength": 1
                            },
                            "oty": {
                                "description": "Line Item Type i.e. Goods/Services",
                                "enum": [
                                    "G",
                                    "S"
                                ]
                            },
                            "ohsn_sc": {
                                "description": "HSN/SAC Value",
                                "minLength": 1,
                                "type": "string",
                                "pattern": "^[a-zA-Z0-9]+$"
                            },
                            "chksum": {
                                "description": "Checksum Value",
                                "$ref": "#/definitions/chksum"
                            },
                            "flag": {
                                "description": "tax payer action",
                                "$ref": "#/definitions/flag"
                            },
                            "state_cd": {
                                "description": "Supply State Code",
                                "$ref": "#/definitions/state_cd"
                            },
                            "ty": {
                                "description": "Identifer if Goods or Services",
                                "type": "string",
                                "enum": [
                                    "G",
                                    "S"
                                ]
                            },
                            "hsn_sc": {
                                "description": "HSN or SAC of Goods or Services as per Invoice line items",
                                "type": "string",
                                "pattern": "^[a-zA-Z0-9]+$"
                            },
                            "txval": {
                                "description": "Taxable value of Goods or Service as per invoice",
                                "minLength": 1,
                                "type": "number"
                            },
                            "irt": {
                                "description": "IGST Rate as per invoice",
                                "type": "number"
                            },
                            "iamt": {
                                "description": "IGST Amount as per invoice",
                                "type": "number"
                            },
                            "crt": {
                                "description": "CGST Rate as per invoice",
                                "type": "number"
                            },
                            "camt": {
                                "description": "CGST Amount as per invoice",
                                "type": "number"
                            },
                            "srt": {
                                "description": "SGST Rate as per invoice",
                                "type": "number"
                            },
                            "samt": {
                                "description": "SGST Amount as per invoice",
                                "type": "number"
                            },
                            "csrt": {
                                "description": "Cess Rate as per invoice",
                                "type": "number"
                            },
                            "csamt": {
                                "description": "Cess Amount as per invoice",
                                "type": "number"
                            },
                            "prs": {
                                "description": "Provisional assessment",
                                "$ref": "#/definitions/boolean"
                            },
                            "od_num": {
                                "description": "Order Number",
                                "$ref": "#/definitions/inum"
                            },
                            "od_dt": {
                                "description": "Order Date",
                                "$ref": "#/definitions/nonEmptydate"
                            }
                        },
                        "required": [
                            "osupst_cd",
                            "omon",
                            "oty",
                            "state_cd",
                            "ty",
                            "typ",
                            "txval"
                        ]
                    },
                    {
                        "type": "object",
                        "properties": {
                            "typ": {
                                "description": "Type of B2cs",
                                "type": "string",
                                "enum": [
                                    "E",
                                    "OE"
                                ]
                            },
                            "etin": {
                                "description": "Ecom Tin",
                                "$ref": "#/definitions/etin"
                            },
                            "osupst_cd": {
                                "description": "Recipient state code",
                                "$ref": "#/definitions/state_cd"
                            },
                            "omon": {
                                "description": "Month",
                                "$ref": "#/definitions/nonEmptydate"
                            },
                            "oty": {
                                "description": "Line Item Type i.e. Goods/Services",
                                "enum": [
                                    "G",
                                    "S"
                                ]
                            },
                            "ohsn_sc": {
                                "description": "HSN/SAC Value",
                                "type": "string",
                                "pattern": "^[a-zA-Z0-9]+$"
                            },
                            "chksum": {
                                "description": "Checksum Value",
                                "$ref": "#/definitions/chksum"
                            },
                            "flag": {
                                "description": "tax payer action",
                                "type": "string",
                                "enum": [
                                    "D"
                                ]
                            },
                            "state_cd": {
                                "description": "Supply State Code",
                                "$ref": "#/definitions/state_cd"
                            },
                            "ty": {
                                "description": "Identifer if Goods or Services",
                                "type": "string",
                                "enum": [
                                    "G",
                                    "S"
                                ]
                            },
                            "hsn_sc": {
                                "description": "HSN or SAC of Goods or Services as per Invoice line items",
                                "type": "string",
                                "pattern": "^[a-zA-Z0-9]+$"
                            },
                            "txval": {
                                "description": "Taxable value of Goods or Service as per invoice",
                                "minLength": 1,
                                "type": "number"
                            },
                            "irt": {
                                "description": "IGST Rate as per invoice",
                                "type": "number"
                            },
                            "iamt": {
                                "description": "IGST Amount as per invoice",
                                "type": "number"
                            },
                            "crt": {
                                "description": "CGST Rate as per invoice",
                                "type": "number"
                            },
                            "camt": {
                                "description": "CGST Amount as per invoice",
                                "type": "number"
                            },
                            "srt": {
                                "description": "SGST Rate as per invoice",
                                "type": "number"
                            },
                            "samt": {
                                "description": "SGST Amount as per invoice",
                                "type": "number"
                            },
                            "csrt": {
                                "description": "Cess Rate as per invoice",
                                "type": "number"
                            },
                            "csamt": {
                                "description": "Cess Amount as per invoice",
                                "type": "number"
                            },
                            "prs": {
                                "description": "Provisional assessment",
                                "$ref": "#/definitions/boolean"
                            },
                            "od_num": {
                                "description": "Order Number",
                                "$ref": "#/definitions/inum"
                            },
                            "od_dt": {
                                "description": "Order Date",
                                "$ref": "#/definitions/nonEmptydate"
                            }
                        },
                        "required": [
                            "state_cd",
                            "flag",
                            "ty",
                            "chksum"
                        ]
                    }
                ]
            }
        },
        "cdnr": {
            "type": "array",
            "items": {
                "anyOf": [
                    {
                        "type": "object",
                        "properties": {
                            "ctin": {
                                "type": "string",
                                "$ref": "#/definitions/gstin"
                            },
                            "nt": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "ntty": {
                                            "type": "string",
                                            "minLength": 1
                                        },
                                        "nt_num": {
                                            "type": "string",
                                            "$ref": "#/definitions/inum"
                                        },
                                        "nt_dt": {
                                            "$ref": "#/definitions/nonEmptydate"
                                        },
                                        "rsn": {
                                            "type": "string"
                                        },
                                        "inum": {
                                            "description": "Supplier Invoice Number",
                                            "$ref": "#/definitions/inum"
                                        },
                                        "idt": {
                                            "description": "Supplier Invoice Date",
                                            "$ref": "#/definitions/nonEmptydate"
                                        },
                                        "rchrg": {
                                            "description": "Reverse Charge",
                                            "$ref": "#/definitions/boolean"
                                        },
                                        "val": {
                                            "description": "Supplier Invoice Value",
                                            "type": "number"
                                        },
                                        "irt": {
                                            "description": "IGST Rate as per invoice",
                                            "type": "number"
                                        },
                                        "iamt": {
                                            "description": "IGST Amount as per invoice",
                                            "type": "number"
                                        },
                                        "crt": {
                                            "description": "CGST Rate as per invoice",
                                            "type": "number"
                                        },
                                        "camt": {
                                            "description": "CGST Amount as per invoice",
                                            "type": "number"
                                        },
                                        "srt": {
                                            "description": "SGST Rate as per invoice",
                                            "type": "number"
                                        },
                                        "samt": {
                                            "description": "SGST Amount as per invoice",
                                            "type": "number"
                                        },
                                        "csrt": {
                                            "description": "Cess Rate as per invoice",
                                            "type": "number"
                                        },
                                        "csamt": {
                                            "description": "Cess Amount as per invoice",
                                            "type": "number"
                                        },
                                        "etin": {
                                            "description": "Ecommerce Gstin",
                                            "$ref": "#/definitions/etin"
                                        }
                                    },
                                    "required": [
                                        "ntty",
                                        "nt_num",
                                        "nt_dt",
                                        "inum",
                                        "idt"
                                    ]
                                }
                            }
                        },
                        "required": [
                            "ctin",
                            "nt"
                        ]
                    },
                    {
                        "type": "object",
                        "properties": {
                            "ctin": {
                                "$ref": "#/definitions/gstin"
                            },
                            "nt": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "ntty": {
                                            "type": "string"
                                        },
                                        "nt_num": {
                                            "$ref": "#/definitions/inum"
                                        },
                                        "nt_dt": {
                                            "$ref": "#/definitions/nonEmptydate"
                                        },
                                        "rsn": {
                                            "type": "string"
                                        },
                                        "inum": {
                                            "description": "Supplier Invoice Number",
                                            "$ref": "#/definitions/inum"
                                        },
                                        "idt": {
                                            "description": "Supplier Invoice Date",
                                            "$ref": "#/definitions/nonEmptydate"
                                        },
                                        "rchrg": {
                                            "description": "Reverse Charge",
                                            "$ref": "#/definitions/boolean"
                                        },
                                        "val": {
                                            "description": "Supplier Invoice Value",
                                            "type": "number"
                                        },
                                        "irt": {
                                            "description": "IGST Rate as per invoice",
                                            "type": "number"
                                        },
                                        "iamt": {
                                            "description": "IGST Amount as per invoice",
                                            "type": "number"
                                        },
                                        "crt": {
                                            "description": "CGST Rate as per invoice",
                                            "type": "number"
                                        },
                                        "camt": {
                                            "description": "CGST Amount as per invoice",
                                            "type": "number"
                                        },
                                        "srt": {
                                            "description": "SGST Rate as per invoice",
                                            "type": "number"
                                        },
                                        "samt": {
                                            "description": "SGST Amount as per invoice",
                                            "type": "number"
                                        },
                                        "csrt": {
                                            "description": "Cess Rate as per invoice",
                                            "type": "number"
                                        },
                                        "csamt": {
                                            "description": "Cess Amount as per invoice",
                                            "type": "number"
                                        },
                                        "etin": {
                                            "description": "Ecommerce Gstin",
                                            "$ref": "#/definitions/etin"
                                        },
                                        "chksum": {
                                            "description": "Checksum Value",
                                            "$ref": "#/definitions/chksum"
                                        },
                                        "flag": {
                                            "description": "tax payer action",
                                            "$ref": "#/definitions/flag"
                                        }
                                    },
                                    "required": [
                                        "nt_num",
                                        "nt_dt",
                                        "flag",
                                        "chksum"
                                    ]
                                }
                            }
                        },
                        "required": [
                            "ctin",
                            "nt"
                        ]
                    }
                ]
            }
        },
        "cdnra": {
            "type": "array",
            "items": {
                "anyOf": [
                    {
                        "type": "object",
                        "properties": {
                            "ctin": {
                                "$ref": "#/definitions/gstin"
                            },
                            "nt": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "ntty": {
                                            "type": "string"
                                        },
                                        "rsn": {
                                            "type": "string"
                                        },
                                        "ont_num": {
                                            "$ref": "#/definitions/inum"
                                        },
                                        "ont_dt": {
                                            "$ref": "#/definitions/nonEmptydate"
                                        },
                                        "nt_num": {
                                            "$ref": "#/definitions/inum"
                                        },
                                        "nt_dt": {
                                            "$ref": "#/definitions/nonEmptydate"
                                        },
                                        "inum": {
                                            "description": "Supplier Invoice Number",
                                            "$ref": "#/definitions/inum"
                                        },
                                        "idt": {
                                            "description": "Supplier Invoice Date",
                                            "$ref": "#/definitions/nonEmptydate"
                                        },
                                        "rchrg": {
                                            "description": "Reverse Charge",
                                            "$ref": "#/definitions/boolean"
                                        },
                                        "val": {
                                            "description": "Supplier Invoice Value",
                                            "type": "number"
                                        },
                                        "irt": {
                                            "description": "IGST Rate as per invoice",
                                            "type": "number"
                                        },
                                        "iamt": {
                                            "description": "IGST Amount as per invoice",
                                            "type": "number"
                                        },
                                        "crt": {
                                            "description": "CGST Rate as per invoice",
                                            "type": "number"
                                        },
                                        "camt": {
                                            "description": "CGST Amount as per invoice",
                                            "type": "number"
                                        },
                                        "srt": {
                                            "description": "SGST Rate as per invoice",
                                            "type": "number"
                                        },
                                        "samt": {
                                            "description": "SGST Amount as per invoice",
                                            "type": "number"
                                        },
                                        "csrt": {
                                            "description": "Cess Rate as per invoice",
                                            "type": "number"
                                        },
                                        "csamt": {
                                            "description": "Cess Amount as per invoice",
                                            "type": "number"
                                        },
                                        "etin": {
                                            "description": "Ecommerce Gstin",
                                            "$ref": "#/definitions/etin"
                                        }
                                    },
                                    "required": [
                                        "ont_num",
                                        "ont_dt",
                                        "inum",
                                        "idt",
                                        "val"
                                    ]
                                }
                            }
                        },
                        "required": [
                            "ctin",
                            "nt"
                        ]
                    },
                    {
                        "type": "object",
                        "properties": {
                            "ctin": {
                                "$ref": "#/definitions/gstin"
                            },
                            "nt": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "ntty": {
                                            "type": "string"
                                        },
                                        "rsn": {
                                            "type": "string"
                                        },
                                        "ont_num": {
                                            "$ref": "#/definitions/inum"
                                        },
                                        "ont_dt": {
                                            "$ref": "#/definitions/nonEmptydate"
                                        },
                                        "nt_num": {
                                            "$ref": "#/definitions/inum"
                                        },
                                        "nt_dt": {
                                            "$ref": "#/definitions/nonEmptydate"
                                        },
                                        "inum": {
                                            "description": "Supplier Invoice Number",
                                            "$ref": "#/definitions/inum"
                                        },
                                        "idt": {
                                            "description": "Supplier Invoice Date",
                                            "$ref": "#/definitions/nonEmptydate"
                                        },
                                        "rchrg": {
                                            "description": "Reverse Charge",
                                            "$ref": "#/definitions/boolean"
                                        },
                                        "val": {
                                            "description": "Supplier Invoice Value",
                                            "type": "number"
                                        },
                                        "irt": {
                                            "description": "IGST Rate as per invoice",
                                            "type": "number"
                                        },
                                        "iamt": {
                                            "description": "IGST Amount as per invoice",
                                            "type": "number"
                                        },
                                        "crt": {
                                            "description": "CGST Rate as per invoice",
                                            "type": "number"
                                        },
                                        "camt": {
                                            "description": "CGST Amount as per invoice",
                                            "type": "number"
                                        },
                                        "srt": {
                                            "description": "SGST Rate as per invoice",
                                            "type": "number"
                                        },
                                        "samt": {
                                            "description": "SGST Amount as per invoice",
                                            "type": "number"
                                        },
                                        "csrt": {
                                            "description": "Cess Rate as per invoice",
                                            "type": "number"
                                        },
                                        "csamt": {
                                            "description": "Cess Amount as per invoice",
                                            "type": "number"
                                        },
                                        "etin": {
                                            "description": "Ecommerce Gstin",
                                            "$ref": "#/definitions/gstin"
                                        },
                                        "flag": {
                                            "description": "tax payer action",
                                            "type": "string",
                                            "enum": [
                                                "D"
                                            ]
                                        },
                                        "chksum": {
                                            "description": "Checksum Value",
                                            "$ref": "#/definitions/chksum"
                                        }
                                    },
                                    "required": [
                                        "nt_num",
                                        "nt_dt",
                                        "flag",
                                        "chksum"
                                    ]
                                }
                            }
                        },
                        "required": [
                            "ctin",
                            "nt"
                        ]
                    }
                ]
            }
        },
        "cdnur": {
            "type": "array",
            "items": {
                "anyOf": [
                    {
                        "type": "object",
                        "properties": {
                            "flag": {
                                "description": "tax payer action",
                                "$ref": "#/definitions/flag"
                            },
                            "chksum": {
                                "description": "Invoice Check sum value",
                                "$ref": "#/definitions/chksum"
                            },
                            "mon": {
                                "description": "month of Credit/ Debit",
                                "type": "string"
                            },
                            "cname": {
                                "description": "Name of Recipient",
                                "type": "string"
                            },
                            "ntty": {
                                "description": "Credit/debit note type",
                                "type": "string"
                            },
                            "state_cd": {
                                "description": "state code",
                                "$ref": "#/definitions/state_cd"
                            },
                            "rsn": {
                                "description": "Reason Code for issuing Debit/Credit Note",
                                "type": "string"
                            },
                            "val": {
                                "description": "Supplier Invoice Value",
                                "type": "number"
                            },
                            "irt": {
                                "description": "IGST Rate as per invoice",
                                "type": "number"
                            },
                            "iamt": {
                                "description": "IGST Amount as per invoice",
                                "type": "number"
                            },
                            "crt": {
                                "description": "CGST Rate as per invoice",
                                "type": "number"
                            },
                            "camt": {
                                "description": "CGST Amount as per invoice",
                                "type": "number"
                            },
                            "srt": {
                                "description": "SGST Rate as per invoice",
                                "type": "number"
                            },
                            "samt": {
                                "description": "SGST Amount as per invoice",
                                "type": "number"
                            },
                            "csrt": {
                                "description": "Cess Rate as per invoice",
                                "type": "number"
                            },
                            "csamt": {
                                "description": "Cess Amount as per invoice",
                                "type": "number"
                            },
                            "etin": {
                                "description": "Ecommerce Gstin",
                                "type": "string",
                                "maxLength": 15,
                                "minLength": 15
                            }
                        },
                        "required": [
                            "state_cd",
                            "mon"
                        ]
                    },
                    {
                        "type": "object",
                        "properties": {
                            "flag": {
                                "description": "tax payer action",
                                "$ref": "#/definitions/flag"
                            },
                            "chksum": {
                                "description": "Invoice Check sum value",
                                "$ref": "#/definitions/chksum"
                            },
                            "mon": {
                                "description": "month of Credit/ Debit",
                                "type": "string"
                            },
                            "cname": {
                                "description": "Name of Recipient",
                                "type": "string"
                            },
                            "ntty": {
                                "description": "Credit/debit note type",
                                "type": "string"
                            },
                            "state_cd": {
                                "description": "state code",
                                "$ref": "#/definitions/state_cd"
                            },
                            "rsn": {
                                "description": "Reason Code for issuing Debit/Credit Note",
                                "type": "string"
                            },
                            "val": {
                                "description": "Supplier Invoice Value",
                                "type": "number"
                            },
                            "irt": {
                                "description": "IGST Rate as per invoice",
                                "type": "number"
                            },
                            "iamt": {
                                "description": "IGST Amount as per invoice",
                                "type": "number"
                            },
                            "crt": {
                                "description": "CGST Rate as per invoice",
                                "type": "number"
                            },
                            "camt": {
                                "description": "CGST Amount as per invoice",
                                "type": "number"
                            },
                            "srt": {
                                "description": "SGST Rate as per invoice",
                                "type": "number"
                            },
                            "samt": {
                                "description": "SGST Amount as per invoice",
                                "type": "number"
                            },
                            "csrt": {
                                "description": "Cess Rate as per invoice",
                                "type": "number"
                            },
                            "csamt": {
                                "description": "Cess Amount as per invoice",
                                "type": "number"
                            },
                            "etin": {
                                "description": "Ecommerce Gstin",
                                "type": "string",
                                "maxLength": 15,
                                "minLength": 15
                            }
                        },
                        "required": [
                            "state_cd",
                            "mon",
                            "flag",
                            "chksum"
                        ]
                    }
                ]
            }
        },
        "cdnura": {
            "type": "array",
            "items": {
                "anyOf": [
                    {
                        "type": "object",
                        "properties": {
                            "flag": {
                                "description": "tax payer action",
                                "$ref": "#/definitions/flag"
                            },
                            "chksum": {
                                "description": "Invoice Check sum value",
                                "$ref": "#/definitions/chksum"
                            },
                            "mon": {
                                "description": "month of Credit/ Debit",
                                "type": "string"
                            },
                            "cname": {
                                "description": "Name of Recipient",
                                "type": "string"
                            },
                            "omon": {
                                "description": "month of Credit/ Debit",
                                "type": "string"
                            },
                            "ocname": {
                                "description": "Name of Recipient",
                                "type": "string"
                            },
                            "ntty": {
                                "description": "Credit/debit note type",
                                "type": "string"
                            },
                            "state_cd": {
                                "description": "state code",
                                "$ref": "#/definitions/state_cd"
                            },
                            "rsn": {
                                "description": "Reason Code for issuing Debit/Credit Note",
                                "type": "string"
                            },
                            "val": {
                                "description": "Supplier Invoice Value",
                                "type": "number"
                            },
                            "irt": {
                                "description": "IGST Rate as per invoice",
                                "type": "number"
                            },
                            "iamt": {
                                "description": "IGST Amount as per invoice",
                                "type": "number"
                            },
                            "crt": {
                                "description": "CGST Rate as per invoice",
                                "type": "number"
                            },
                            "camt": {
                                "description": "CGST Amount as per invoice",
                                "type": "number"
                            },
                            "srt": {
                                "description": "SGST Rate as per invoice",
                                "type": "number"
                            },
                            "samt": {
                                "description": "SGST Amount as per invoice",
                                "type": "number"
                            },
                            "csrt": {
                                "description": "Cess Rate as per invoice",
                                "type": "number"
                            },
                            "csamt": {
                                "description": "Cess Amount as per invoice",
                                "type": "number"
                            },
                            "etin": {
                                "description": "Ecommerce Gstin",
                                "type": "string",
                                "maxLength": 15,
                                "minLength": 15
                            }
                        },
                        "required": [
                            "state_cd",
                            "mon"
                        ]
                    },
                    {
                        "type": "object",
                        "properties": {
                            "flag": {
                                "description": "tax payer action",
                                "$ref": "#/definitions/flag"
                            },
                            "chksum": {
                                "description": "Invoice Check sum value",
                                "$ref": "#/definitions/chksum"
                            },
                            "mon": {
                                "description": "month of Credit/ Debit",
                                "type": "string"
                            },
                            "cname": {
                                "description": "Name of Recipient",
                                "type": "string"
                            },
                            "omon": {
                                "description": "month of Credit/ Debit",
                                "type": "string"
                            },
                            "ocname": {
                                "description": "Name of Recipient",
                                "type": "string"
                            },
                            "ntty": {
                                "description": "Credit/debit note type",
                                "type": "string"
                            },
                            "state_cd": {
                                "description": "state code",
                                "$ref": "#/definitions/state_cd"
                            },
                            "rsn": {
                                "description": "Reason Code for issuing Debit/Credit Note",
                                "type": "string"
                            },
                            "val": {
                                "description": "Supplier Invoice Value",
                                "type": "number"
                            },
                            "irt": {
                                "description": "IGST Rate as per invoice",
                                "type": "number"
                            },
                            "iamt": {
                                "description": "IGST Amount as per invoice",
                                "type": "number"
                            },
                            "crt": {
                                "description": "CGST Rate as per invoice",
                                "type": "number"
                            },
                            "camt": {
                                "description": "CGST Amount as per invoice",
                                "type": "number"
                            },
                            "srt": {
                                "description": "SGST Rate as per invoice",
                                "type": "number"
                            },
                            "samt": {
                                "description": "SGST Amount as per invoice",
                                "type": "number"
                            },
                            "csrt": {
                                "description": "Cess Rate as per invoice",
                                "type": "number"
                            },
                            "csamt": {
                                "description": "Cess Amount as per invoice",
                                "type": "number"
                            },
                            "etin": {
                                "description": "Ecommerce Gstin",
                                "type": "string",
                                "maxLength": 15,
                                "minLength": 15
                            }
                        },
                        "required": [
                            "state_cd",
                            "mon",
                            "flag",
                            "chksum"
                        ]
                    }
                ]
            }
        },
        "nil": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "chksum": {
                        "description": "Checksum Value",
                        "$ref": "#/definitions/chksum"
                    },
                    "g": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "sply_ty": {
                                    "description": "Supply Type",
                                    "type": "string",
                                    "enum": [
                                        "INTRB2B",
                                        "INTRB2C",
                                        "INTRAB2B",
                                        "INTRAB2C"
                                    ]
                                },
                                "nil_amt": {
                                    "description": "Total Nil rated outward supplies",
                                    "$ref": "#/definitions/nonEmptyCost"
                                },
                                "expt_amt": {
                                    "description": "Total Exempted outward supplies",
                                    "$ref": "#/definitions/nonEmptyCost"
                                },
                                "ngsup_amt": {
                                    "description": "Total Non GST outward supplies",
                                    "$ref": "#/definitions/nonEmptyCost"
                                }
                            },
                            "required": [
                                "sply_ty",
                                "nil_amt",
                                "expt_amt",
                                "ngsup_amt"
                            ]
                        }
                    },
                    "s": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "sply_ty": {
                                    "description": "Supply Type",
                                    "type": "string",
                                    "enum": [
                                        "INTRB2B",
                                        "INTRB2C",
                                        "INTRAB2B",
                                        "INTRAB2C"
                                    ]
                                },
                                "nil_amt": {
                                    "description": "Total Nil rated outward supplies",
                                    "$ref": "#/definitions/nonEmptyCost"
                                },
                                "expt_amt": {
                                    "description": "Total Exempted outward supplies",
                                    "$ref": "#/definitions/nonEmptyCost"
                                },
                                "ngsup_amt": {
                                    "description": "Total Non GST outward supplies",
                                    "$ref": "#/definitions/nonEmptyCost"
                                }
                            },
                            "required": [
                                "sply_ty",
                                "nil_amt",
                                "expt_amt",
                                "ngsup_amt"
                            ]
                        }
                    }
                }
            }
        },
        "exp": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "ex_tp": {
                        "description": "Supplies exported types i.e WithPay,WithoutPay",
                        "type": "string",
                        "enum": [
                            "WOPAY",
                            "WPAY"
                        ]
                    },
                    "inv": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "anyOf": [
                                {
                                    "properties": {
                                        "chksum": {
                                            "description": "Checksum Value",
                                            "$ref": "#/definitions/chksum"
                                        },
                                        "flag": {
                                            "description": "tax payer action",
                                            "$ref": "#/definitions/flag"
                                        },
                                        "inum": {
                                            "description": "Invoice Number",
                                            "$ref": "#/definitions/inum"
                                        },
                                        "idt": {
                                            "description": "Export Invoice date",
                                            "$ref": "#/definitions/nonEmptydate"
                                        },
                                        "val": {
                                            "type": "number",
                                            "minLength": 1,
                                            "description": "Supplier Invoice Value"
                                        },
                                        "sbnum": {
                                            "$ref": "#/definitions/inum",
                                            "description": "Shipping Bill No. or Bill of Export No."
                                        },
                                        "sbdt": {
                                            "description": "Shipping Bill Date. or Bill of Export Date",
                                            "$ref": "#/definitions/nonEmptydate"
                                        },
                                        "sbpcode": {
                                            "description": "Port Code",
                                            "$ref": "#/definitions/nonEmptyString"
                                        },
                                        "prs": {
                                            "description": "Provisional assessment",
                                            "$ref": "#/definitions/boolean"
                                        },
                                        "od_num": {
                                            "description": "Order Number",
                                            "$ref": "#/definitions/inum"
                                        },
                                        "od_dt": {
                                            "description": "Order Date",
                                            "$ref": "#/definitions/nonEmptydate"
                                        },
                                        "itms": {
                                            "type": "array",
                                            "items": {
                                                "type": "object",
                                                "properties": {
                                                    "ty": {
                                                        "description": "Identifier if Goods or Services",
                                                        "type": "string",
                                                        "enum": [
                                                            "G",
                                                            "S"
                                                        ]
                                                    },
                                                    "hsn_sc": {
                                                        "description": "HSN or SAC of Goods or Services as per Invoice line items",
                                                        "type": "string"
                                                    },
                                                    "txval": {
                                                        "description": "Taxable value of Goods or Service as per invoice",
                                                        "minLength": 1,
                                                        "type": "number"
                                                    },
                                                    "irt": {
                                                        "description": "IGST Rate as per invoice",
                                                        "type": "number"
                                                    },
                                                    "iamt": {
                                                        "description": "IGST Amount as per invoice",
                                                        "type": "number"
                                                    },
                                                    "crt": {
                                                        "description": "CGST Rate as per invoice",
                                                        "type": "number"
                                                    },
                                                    "camt": {
                                                        "description": "CGST Amount as per invoice",
                                                        "type": "number"
                                                    },
                                                    "srt": {
                                                        "description": "SGST Rate as per invoice",
                                                        "type": "number"
                                                    },
                                                    "samt": {
                                                        "description": "SGST Amount as per invoice",
                                                        "type": "number"
                                                    },
                                                    "csrt": {
                                                        "description": "Cess Rate as per invoice",
                                                        "type": "number"
                                                    },
                                                    "csamt": {
                                                        "description": "Cess Amount as per invoice",
                                                        "type": "number"
                                                    }
                                                },
                                                "required": [
                                                    "ty",
                                                    "txval"
                                                ]
                                            }
                                        }
                                    },
                                    "required": [
                                        "inum",
                                        "idt",
                                        "val",
                                        "sbnum",
                                        "sbdt",
                                        "itms"
                                    ]
                                },
                                {
                                    "properties": {
                                        "chksum": {
                                            "description": "Checksum Value",
                                            "$ref": "#/definitions/chksum"
                                        },
                                        "flag": {
                                            "description": "tax payer action",
                                            "type": "string",
                                            "enum": [
                                                "D"
                                            ]
                                        },
                                        "inum": {
                                            "description": "Invoice Number",
                                            "$ref": "#/definitions/inum"
                                        },
                                        "idt": {
                                            "description": "Export Invoice date",
                                            "$ref": "#/definitions/nonEmptydate"
                                        },
                                        "val": {
                                            "type": "number",
                                            "description": "Supplier Invoice Value"
                                        },
                                        "sbnum": {
                                            "$ref": "#/definitions/inum",
                                            "description": "Shipping Bill No. or Bill of Export No."
                                        },
                                        "sbdt": {
                                            "description": "Shipping Bill Date. or Bill of Export Date",
                                            "$ref": "#/definitions/nonEmptydate"
                                        },
                                        "sbpcode": {
                                            "description": "Port Code",
                                            "$ref": "#/definitions/nonEmptyString"
                                        },
                                        "prs": {
                                            "description": "Provisional assessment",
                                            "$ref": "#/definitions/boolean"
                                        },
                                        "itms": {
                                            "type": "array",
                                            "items": {
                                                "type": "object",
                                                "properties": {
                                                    "ty": {
                                                        "description": "Identifier if Goods or Services",
                                                        "type": "string",
                                                        "enum": [
                                                            "G",
                                                            "S"
                                                        ]
                                                    },
                                                    "hsn_sc": {
                                                        "description": "HSN or SAC of Goods or Services as per Invoice line items",
                                                        "type": "string"
                                                    },
                                                    "txval": {
                                                        "description": "Taxable value of Goods or Service as per invoice",
                                                        "minLength": 1,
                                                        "type": "number"
                                                    },
                                                    "irt": {
                                                        "description": "IGST Rate as per invoice",
                                                        "type": "number"
                                                    },
                                                    "iamt": {
                                                        "description": "IGST Amount as per invoice",
                                                        "type": "number"
                                                    },
                                                    "crt": {
                                                        "description": "CGST Rate as per invoice",
                                                        "type": "number"
                                                    },
                                                    "camt": {
                                                        "description": "CGST Amount as per invoice",
                                                        "type": "number"
                                                    },
                                                    "srt": {
                                                        "description": "SGST Rate as per invoice",
                                                        "type": "number"
                                                    },
                                                    "samt": {
                                                        "description": "SGST Amount as per invoice",
                                                        "type": "number"
                                                    },
                                                    "csrt": {
                                                        "description": "Cess Rate as per invoice",
                                                        "type": "number"
                                                    },
                                                    "csamt": {
                                                        "description": "Cess Amount as per invoice",
                                                        "type": "number"
                                                    }
                                                },
                                                "required": [
                                                    "ty",
                                                    "txval"
                                                ]
                                            }
                                        }
                                    },
                                    "required": [
                                        "inum",
                                        "idt",
                                        "flag",
                                        "chksum"
                                    ]
                                }
                            ]
                        }
                    }
                },
                "required": [
                    "ex_tp",
                    "inv"
                ]
            }
        },
        "expa": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "ex_tp": {
                        "type": "string",
                        "description": "Supplies exported types i.e WithPay,WithoutPay",
                        "enum": [
                            "WOPAY",
                            "WPAY"
                        ]
                    },
                    "inv": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "anyOf": [
                                {
                                    "properties": {
                                        "chksum": {
                                            "description": "Checksum Value",
                                            "$ref": "#/definitions/chksum"
                                        },
                                        "flag": {
                                            "description": "tax payer action",
                                            "$ref": "#/definitions/flag"
                                        },
                                        "inum": {
                                            "description": "Invoice Number",
                                            "$ref": "#/definitions/inum"
                                        },
                                        "idt": {
                                            "description": "Export Invoice date",
                                            "$ref": "#/definitions/nonEmptydate"
                                        },
                                        "val": {
                                            "description": "Supplier Invoice Value",
                                            "minLength": 1,
                                            "type": "number"
                                        },
                                        "sbnum": {
                                            "$ref": "#/definitions/inum",
                                            "description": "Shipping Bill No. or Bill of Export No."
                                        },
                                        "sbdt": {
                                            "description": "Shipping Bill Date. or Bill of Export Date",
                                            "$ref": "#/definitions/nonEmptydate"
                                        },
                                        "sbpcode": {
                                            "description": "Port Code",
                                            "$ref": "#/definitions/nonEmptyString"
                                        },
                                        "prs": {
                                            "description": "Provisional assessment",
                                            "$ref": "#/definitions/boolean"
                                        },
                                        "od_num": {
                                            "description": "Order Number",
                                            "$ref": "#/definitions/inum"
                                        },
                                        "od_dt": {
                                            "description": "Order Date",
                                            "$ref": "#/definitions/nonEmptydate"
                                        },
                                        "oinum": {
                                            "description": "Original invoice number",
                                            "$ref": "#/definitions/inum"
                                        },
                                        "oidt": {
                                            "description": "Original invoice date",
                                            "$ref": "#/definitions/nonEmptydate"
                                        },
                                        "itms": {
                                            "type": "array",
                                            "items": {
                                                "type": "object",
                                                "properties": {
                                                    "ty": {
                                                        "description": "Identifier if Goods or Services",
                                                        "type": "string",
                                                        "enum": [
                                                            "G",
                                                            "S"
                                                        ]
                                                    },
                                                    "hsn_sc": {
                                                        "description": "HSN or SAC of Goods or Services as per Invoice line items",
                                                        "type": "string"
                                                    },
                                                    "txval": {
                                                        "description": "Taxable value of Goods or Service as per invoice",
                                                        "minLength": 1,
                                                        "type": "number"
                                                    },
                                                    "irt": {
                                                        "description": "IGST Rate as per invoice",
                                                        "type": "number"
                                                    },
                                                    "iamt": {
                                                        "description": "IGST Amount as per invoice",
                                                        "type": "number"
                                                    },
                                                    "crt": {
                                                        "description": "CGST Rate as per invoice",
                                                        "type": "number"
                                                    },
                                                    "camt": {
                                                        "description": "CGST Amount as per invoice",
                                                        "type": "number"
                                                    },
                                                    "srt": {
                                                        "description": "SGST Rate as per invoice",
                                                        "type": "number"
                                                    },
                                                    "samt": {
                                                        "description": "SGST Amount as per invoice",
                                                        "type": "number"
                                                    },
                                                    "csrt": {
                                                        "description": "Cess Rate as per invoice",
                                                        "type": "number"
                                                    },
                                                    "csamt": {
                                                        "description": "Cess Amount as per invoice",
                                                        "type": "number"
                                                    }
                                                },
                                                "required": [
                                                    "ty",
                                                    "txval"
                                                ]
                                            }
                                        }
                                    },
                                    "required": [
                                        "inum",
                                        "idt",
                                        "val",
                                        "sbnum",
                                        "sbdt",
                                        "oinum",
                                        "oidt",
                                        "itms"
                                    ]
                                },
                                {
                                    "properties": {
                                        "chksum": {
                                            "description": "Checksum Value",
                                            "$ref": "#/definitions/chksum"
                                        },
                                        "flag": {
                                            "description": "tax payer action",
                                            "type": "string",
                                            "enum": [
                                                "D"
                                            ]
                                        },
                                        "inum": {
                                            "description": " Invoice Number",
                                            "$ref": "#/definitions/inum"
                                        },
                                        "idt": {
                                            "description": "Export Invoice date",
                                            "$ref": "#/definitions/nonEmptydate"
                                        },
                                        "val": {
                                            "description": "Supplier Invoice Value",
                                            "type": "number"
                                        },
                                        "sbnum": {
                                            "$ref": "#/definitions/inum",
                                            "description": "Shipping Bill No. or Bill of Export No."
                                        },
                                        "sbdt": {
                                            "description": "Shipping Bill Date. or Bill of Export Date",
                                            "$ref": "#/definitions/nonEmptydate"
                                        },
                                        "sbpcode": {
                                            "description": "Port Code",
                                            "$ref": "#/definitions/nonEmptyString"
                                        },
                                        "prs": {
                                            "description": "Provisional assessment",
                                            "$ref": "#/definitions/boolean"
                                        },
                                        "oinum": {
                                            "description": "Original invoice number",
                                            "$ref": "#/definitions/inum"
                                        },
                                        "oidt": {
                                            "description": "Original invoice date",
                                            "$ref": "#/definitions/nonEmptydate"
                                        },
                                        "itms": {
                                            "type": "array",
                                            "items": {
                                                "type": "object",
                                                "properties": {
                                                    "ty": {
                                                        "description": "Identifier if Goods or Services",
                                                        "type": "string",
                                                        "enum": [
                                                            "G",
                                                            "S"
                                                        ]
                                                    },
                                                    "hsn_sc": {
                                                        "description": "HSN or SAC of Goods or Services as per Invoice line items",
                                                        "type": "string"
                                                    },
                                                    "txval": {
                                                        "description": "Taxable value of Goods or Service as per invoice",
                                                        "minLength": 1,
                                                        "type": "number"
                                                    },
                                                    "irt": {
                                                        "description": "IGST Rate as per invoice",
                                                        "type": "number"
                                                    },
                                                    "iamt": {
                                                        "description": "IGST Amount as per invoice",
                                                        "type": "number"
                                                    },
                                                    "crt": {
                                                        "description": "CGST Rate as per invoice",
                                                        "type": "number"
                                                    },
                                                    "camt": {
                                                        "description": "CGST Amount as per invoice",
                                                        "type": "number"
                                                    },
                                                    "srt": {
                                                        "description": "SGST Rate as per invoice",
                                                        "type": "number"
                                                    },
                                                    "samt": {
                                                        "description": "SGST Amount as per invoice",
                                                        "type": "number"
                                                    },
                                                    "csrt": {
                                                        "description": "Cess Rate as per invoice",
                                                        "type": "number"
                                                    },
                                                    "csamt": {
                                                        "description": "Cess Amount as per invoice",
                                                        "type": "number"
                                                    }
                                                },
                                                "required": [
                                                    "ty",
                                                    "txval"
                                                ]
                                            }
                                        }
                                    },
                                    "required": [
                                        "inum",
                                        "idt",
                                        "chksum",
                                        "flag"
                                    ]
                                }
                            ]
                        }
                    }
                },
                "required": [
                    "ex_tp",
                    "inv"
                ]
            }
        },
        "at": {
            "type": "array",
            "items": {
                "anyOf": [
                    {
                        "type": "object",
                        "properties": {
                            "chksum": {
                                "description": "Checksum Value",
                                "$ref": "#/definitions/chksum"
                            },
                            "flag": {
                                "description": "tax payer action",
                                "$ref": "#/definitions/flag"
                            },
                            "cpty": {
                                "description": "GSTIN/UID of the Receiver taxpayer/UN,Govt Bodies",
                                "$ref": "#/definitions/nonEmptyString"
                            },
                            "typ": {
                                "description": "Type of invoices",
                                "type": "string",
                                "enum": [
                                    "B2B",
                                    "B2CL"
                                ]
                            },
                            "state_cd": {
                                "description": "Recipient State Code",
                                "$ref": "#/definitions/state_cd"
                            },
                            "doc_num": {
                                "$ref": "#/definitions/inum",
                                "description": "Supplier Document Number"
                            },
                            "doc_dt": {
                                "description": "Supplier Document Date",
                                "$ref": "#/definitions/nonEmptydate"
                            },
                            "ad_amt": {
                                "description": "Amount of Advance received",
                                "minLength": 1,
                                "type": "number"
                            },
                            "itms": {
                                "minLength": 1,
                                "type": "array",
                                "description": "Item Details",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "ty": {
                                            "description": "Identifier if Goods or Services",
                                            "type": "string",
                                            "enum": [
                                                "G",
                                                "S"
                                            ]
                                        },
                                        "hsn_sc": {
                                            "description": "HSN or SAC of Goods or Services as per Invoice line items",
                                            "type": "string",
                                            "pattern": "^[a-zA-Z0-9]+$"
                                        },
                                        "txval": {
                                            "description": "Taxable Value per invoice",
                                            "type": "number"
                                        },
                                        "irt": {
                                            "description": "IGST Rate as per invoice",
                                            "type": "number"
                                        },
                                        "iamt": {
                                            "description": "IGST Amount as per invoice",
                                            "type": "number"
                                        },
                                        "crt": {
                                            "description": "CGST Rate as per invoice",
                                            "type": "number"
                                        },
                                        "camt": {
                                            "description": "CGST Amount as per invoice",
                                            "type": "number"
                                        },
                                        "srt": {
                                            "description": "SGST Rate as per invoice",
                                            "type": "number"
                                        },
                                        "samt": {
                                            "description": "SGST Amount as per invoice",
                                            "type": "number"
                                        },
                                        "csrt": {
                                            "description": "Cess Rate as per invoice",
                                            "type": "number"
                                        },
                                        "csamt": {
                                            "description": "Cess Amount as per invoice",
                                            "type": "number"
                                        }
                                    },
                                    "required": [
                                        "ty"
                                    ]
                                }
                            }
                        },
                        "required": [
                            "cpty",
                            "state_cd",
                            "doc_num",
                            "doc_dt",
                            "itms"
                        ]
                    },
                    {
                        "type": "object",
                        "properties": {
                            "chksum": {
                                "description": "Checksum Value",
                                "$ref": "#/definitions/chksum"
                            },
                            "flag": {
                                "description": "tax payer action",
                                "type": "string",
                                "enum": [
                                    "D"
                                ]
                            },
                            "cpty": {
                                "description": "GSTIN/UID of the Receiver taxpayer/UN,Govt Bodies",
                                "$ref": "#/definitions/nonEmptyString"
                            },
                            "typ": {
                                "description": "Type of invoices",
                                "type": "string",
                                "enum": [
                                    "B2B",
                                    "B2CL"
                                ]
                            },
                            "state_cd": {
                                "description": "Recipient State Code",
                                "$ref": "#/definitions/state_cd"
                            },
                            "doc_num": {
                                "$ref": "#/definitions/inum",
                                "description": "Supplier Document Number"
                            },
                            "doc_dt": {
                                "description": "Supplier Document Date",
                                "$ref": "#/definitions/nonEmptydate"
                            },
                            "ad_amt": {
                                "description": "Amount of Advance received",
                                "type": "number"
                            },
                            "itms": {
                                "type": "array",
                                "description": "Item Details",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "ty": {
                                            "description": "Identifier if Goods or Services",
                                            "type": "string",
                                            "enum": [
                                                "G",
                                                "S"
                                            ]
                                        },
                                        "hsn_sc": {
                                            "description": "HSN or SAC of Goods or Services as per Invoice line items",
                                            "type": "string",
                                            "pattern": "^[a-zA-Z0-9]+$"
                                        },
                                        "txval": {
                                            "description": "Taxable Value per invoice",
                                            "type": "number"
                                        },
                                        "irt": {
                                            "description": "IGST Rate as per invoice",
                                            "type": "number"
                                        },
                                        "iamt": {
                                            "description": "IGST Amount as per invoice",
                                            "type": "number"
                                        },
                                        "crt": {
                                            "description": "CGST Rate as per invoice",
                                            "type": "number"
                                        },
                                        "camt": {
                                            "description": "CGST Amount as per invoice",
                                            "type": "number"
                                        },
                                        "srt": {
                                            "description": "SGST Rate as per invoice",
                                            "type": "number"
                                        },
                                        "samt": {
                                            "description": "SGST Amount as per invoice",
                                            "type": "number"
                                        },
                                        "csrt": {
                                            "description": "Cess Rate as per invoice",
                                            "type": "number"
                                        },
                                        "csamt": {
                                            "description": "Cess Amount as per invoice",
                                            "type": "number"
                                        }
                                    },
                                    "required": [
                                        "ty"
                                    ]
                                }
                            }
                        },
                        "required": [
                            "chksum",
                            "flag",
                            "doc_num",
                            "doc_dt"
                        ]
                    }
                ]
            }
        },
        "ata": {
            "type": "array",
            "items": {
                "anyOf": [
                    {
                        "type": "object",
                        "properties": {
                            "ocpty": {
                                "description": "Counter party GSTIN or name",
                                "$ref": "#/definitions/nonEmptyString"
                            },
                            "odoc_num": {
                                "$ref": "#/definitions/inum",
                                "description": "Original/Revised document number"
                            },
                            "odoc_dt": {
                                "description": "Original/Revised transaction date",
                                "$ref": "#/definitions/nonEmptydate"
                            },
                            "flag": {
                                "description": "tax payer action",
                                "$ref": "#/definitions/flag"
                            },
                            "chksum": {
                                "description": "Checksum Value",
                                "$ref": "#/definitions/chksum"
                            },
                            "cpty": {
                                "description": "Counter party GSTIN or name",
                                "$ref": "#/definitions/nonEmptyString"
                            },
                            "typ": {
                                "description": "Type of invoices",
                                "type": "string",
                                "enum": [
                                    "B2B",
                                    "B2CL"
                                ]
                            },
                            "state_cd": {
                                "description": "Recipient State Code",
                                "$ref": "#/definitions/state_cd"
                            },
                            "doc_num": {
                                "$ref": "#/definitions/inum",
                                "description": "Supplier Document Number"
                            },
                            "doc_dt": {
                                "description": "Transaction date",
                                "$ref": "#/definitions/nonEmptydate"
                            },
                            "ad_amt": {
                                "type": "number",
                                "minLength": 1,
                                "description": "Amount of Advance received"
                            },
                            "itms": {
                                "minLength": 1,
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "description": "Item Details",
                                    "properties": {
                                        "ty": {
                                            "type": "string",
                                            "description": "Identifier if Goods or Services",
                                            "enum": [
                                                "G",
                                                "S"
                                            ]
                                        },
                                        "hsn_sc": {
                                            "type": "string",
                                            "description": "HSN or SAC of Goods or Services as per Invoice line items",
                                            "pattern": "^[a-zA-Z0-9]+$"
                                        },
                                        "txval": {
                                            "description": "Taxable Value per invoice",
                                            "type": "number"
                                        },
                                        "irt": {
                                            "type": "number",
                                            "description": "IGST Rate as per invoice"
                                        },
                                        "iamt": {
                                            "type": "number",
                                            "description": "IGST Amount as per invoice"
                                        },
                                        "crt": {
                                            "type": "number",
                                            "description": "CGST Rate as per invoice"
                                        },
                                        "camt": {
                                            "type": "number",
                                            "description": "CGST Amount as per invoice"
                                        },
                                        "srt": {
                                            "type": "number",
                                            "description": "SGST Rate as per invoice"
                                        },
                                        "samt": {
                                            "type": "number",
                                            "description": "SGST Amount as per invoice"
                                        },
                                        "csrt": {
                                            "description": "Cess Rate as per invoice",
                                            "type": "number"
                                        },
                                        "csamt": {
                                            "description": "Cess Amount as per invoice",
                                            "type": "number"
                                        }
                                    },
                                    "required": [
                                        "ty"
                                    ]
                                }
                            }
                        },
                        "required": [
                            "ocpty",
                            "odoc_num",
                            "odoc_dt",
                            "cpty",
                            "state_cd",
                            "doc_num",
                            "doc_dt",
                            "itms"
                        ]
                    },
                    {
                        "type": "object",
                        "properties": {
                            "ocpty": {
                                "description": "Counter party GSTIN or name",
                                "$ref": "#/definitions/nonEmptyString"
                            },
                            "odoc_num": {
                                "$ref": "#/definitions/inum",
                                "description": "Original/Revised document number"
                            },
                            "odoc_dt": {
                                "description": "Original/Revised transaction date",
                                "$ref": "#/definitions/nonEmptydate"
                            },
                            "chksum": {
                                "description": "Checksum Value",
                                "$ref": "#/definitions/chksum"
                            },
                            "flag": {
                                "description": "tax payer action",
                                "type": "string",
                                "enum": [
                                    "D"
                                ]
                            },
                            "cpty": {
                                "description": "Counter party GSTIN or name",
                                "$ref": "#/definitions/nonEmptyString"
                            },
                            "typ": {
                                "description": "Type of invoices",
                                "type": "string",
                                "enum": [
                                    "B2B",
                                    "B2CL"
                                ]
                            },
                            "state_cd": {
                                "description": "Recipient State Code",
                                "$ref": "#/definitions/state_cd"
                            },
                            "doc_num": {
                                "$ref": "#/definitions/inum",
                                "description": "Supplier Document Number"
                            },
                            "doc_dt": {
                                "description": "Transaction date",
                                "$ref": "#/definitions/nonEmptydate"
                            },
                            "ad_amt": {
                                "type": "number",
                                "description": "Amount of Advance received"
                            },
                            "itms": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "description": "Item Details",
                                    "properties": {
                                        "ty": {
                                            "type": "string",
                                            "description": "Identifier if Goods or Services",
                                            "enum": [
                                                "G",
                                                "S"
                                            ]
                                        },
                                        "hsn_sc": {
                                            "type": "string",
                                            "description": "HSN or SAC of Goods or Services as per Invoice line items",
                                            "pattern": "^[a-zA-Z0-9]+$"
                                        },
                                        "txval": {
                                            "description": "Taxable Value per invoice",
                                            "type": "number"
                                        },
                                        "irt": {
                                            "type": "number",
                                            "description": "IGST Rate as per invoice"
                                        },
                                        "iamt": {
                                            "type": "number",
                                            "description": "IGST Amount as per invoice"
                                        },
                                        "crt": {
                                            "type": "number",
                                            "description": "CGST Rate as per invoice"
                                        },
                                        "camt": {
                                            "type": "number",
                                            "description": "CGST Amount as per invoice"
                                        },
                                        "srt": {
                                            "type": "number",
                                            "description": "SGST Rate as per invoice"
                                        },
                                        "samt": {
                                            "type": "number",
                                            "description": "SGST Amount as per invoice"
                                        },
                                        "csrt": {
                                            "description": "Cess Rate as per invoice",
                                            "type": "number"
                                        },
                                        "csamt": {
                                            "description": "Cess Amount as per invoice",
                                            "type": "number"
                                        }
                                    },
                                    "required": [
                                        "ty"
                                    ]
                                }
                            }
                        },
                        "required": [
                            "flag",
                            "chksum",
                            "doc_num",
                            "doc_dt"
                        ]
                    }
                ]
            }
        },
        "txpd": {
            "type": "array",
            "items": {
                "anyOf": [
                    {
                        "type": "object",
                        "properties": {
                            "chksum": {
                                "description": "Checksum Value",
                                "$ref": "#/definitions/chksum"
                            },
                            "flag": {
                                "description": "tax payer action",
                                "$ref": "#/definitions/flag"
                            },
                            "cpty": {
                                "description": "Counter party GSTIN or name",
                                "$ref": "#/definitions/nonEmptyString"
                            },
                            "typ": {
                                "description": "Type of invoices",
                                "type": "string",
                                "enum": [
                                    "B2B",
                                    "B2CL"
                                ]
                            },
                            "idt": {
                                "description": "Supplier Invoice Date",
                                "$ref": "#/definitions/nonEmptydate"
                            },
                            "inum": {
                                "description": " Invoice Number",
                                "$ref": "#/definitions/inum"
                            },
                            "doc_num": {
                                "description": "Supplier Document Number",
                                "$ref": "#/definitions/inum"
                            },
                            "doc_dt": {
                                "description": "Supplier Document Date",
                                "$ref": "#/definitions/nonEmptydate"
                            },
                            "irt": {
                                "description": "IGST Rate as per invoice",
                                "type": "number"
                            },
                            "iamt": {
                                "description": "IGST Amount as per invoice",
                                "type": "number"
                            },
                            "crt": {
                                "description": "CGST Rate as per invoice",
                                "type": "number"
                            },
                            "camt": {
                                "description": "CGST Amount as per invoice",
                                "type": "number"
                            },
                            "srt": {
                                "description": "SGST Rate as per invoice",
                                "type": "number"
                            },
                            "samt": {
                                "description": "SGST Amount as per invoice",
                                "type": "number"
                            },
                            "csrt": {
                                "description": "Cess Rate as per invoice",
                                "type": "number"
                            },
                            "csamt": {
                                "description": "Cess Amount as per invoice",
                                "type": "number"
                            }
                        },
                        "required": [
                            "inum",
                            "doc_num",
                            "doc_dt",
                            "idt"
                        ]
                    },
                    {
                        "type": "object",
                        "properties": {
                            "chksum": {
                                "description": "Checksum Value",
                                "$ref": "#/definitions/chksum"
                            },
                            "flag": {
                                "description": "tax payer action",
                                "type": "string",
                                "enum": [
                                    "D"
                                ]
                            },
                            "cpty": {
                                "description": "Counter party GSTIN or name",
                                "$ref": "#/definitions/nonEmptyString"
                            },
                            "typ": {
                                "description": "Type of invoices",
                                "type": "string",
                                "enum": [
                                    "B2B",
                                    "B2CL"
                                ]
                            },
                            "idt": {
                                "description": "Supplier Invoice Date",
                                "$ref": "#/definitions/nonEmptydate"
                            },
                            "inum": {
                                "description": " Invoice Number",
                                "$ref": "#/definitions/inum"
                            },
                            "doc_num": {
                                "description": "Supplier Document Number",
                                "$ref": "#/definitions/inum"
                            },
                            "doc_dt": {
                                "description": "Supplier Document Date",
                                "$ref": "#/definitions/nonEmptydate"
                            },
                            "irt": {
                                "description": "IGST Rate as per invoice",
                                "type": "number"
                            },
                            "iamt": {
                                "description": "IGST Amount as per invoice",
                                "type": "number"
                            },
                            "crt": {
                                "description": "CGST Rate as per invoice",
                                "type": "number"
                            },
                            "camt": {
                                "description": "CGST Amount as per invoice",
                                "type": "number"
                            },
                            "srt": {
                                "description": "SGST Rate as per invoice",
                                "type": "number"
                            },
                            "samt": {
                                "description": "SGST Amount as per invoice",
                                "type": "number"
                            },
                            "csrt": {
                                "description": "Cess Rate as per invoice",
                                "type": "number"
                            },
                            "csamt": {
                                "description": "Cess Amount as per invoice",
                                "type": "number"
                            }
                        },
                        "required": [
                            "chksum",
                            "flag",
                            "inum",
                            "idt",
                            "doc_num",
                            "doc_dt"
                        ]
                    }
                ]
            }
        },
        "ecom_invoices": {
            "type": "array",
            "items": {
                "type": "object",
                "anyOf": [
                    {
                        "properties": {
                            "ecom_ty": {
                                "type": "string",
                                "enum": [
                                    "Inter",
                                    "Intra"
                                ]
                            },
                            "chksum": {
                                "description": "Checksum Value",
                                "$ref": "#/definitions/chksum"
                            },
                            "flag": {
                                "description": "tax payer action",
                                "$ref": "#/definitions/flag"
                            },
                            "eInvoices": {
                                "minLength": 1,
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "ctin": {
                                            "description": "GSTIN/UID of the Receiver taxpayer/UN,Govt Bodies",
                                            "$ref": "#/definitions/gstin"
                                        },
                                        "txprd": {
                                            "description": "Tax Period",
                                            "minLength": 1,
                                            "type": "string"
                                        },
                                        "mid": {
                                            "description": "Merchant ID issued by e-commerce portal",
                                            "type": "string",
                                            "maxLength": 20
                                        },
                                        "grsval": {
                                            "description": "Gross Value of supplies",
                                            "minLength": 1,
                                            "type": "number"
                                        },
                                        "itms": {
                                            "type": "array",
                                            "items": {
                                                "type": "object",
                                                "properties": {
                                                    "ty": {
                                                        "description": "Nature of Supply",
                                                        "type": "string",
                                                        "enum": [
                                                            "G",
                                                            "S"
                                                        ]
                                                    },
                                                    "hsn_sc": {
                                                        "description": "HSN or SAC of Goods or Services as per Invoice line items",
                                                        "type": "string",
                                                        "maxLength": 10
                                                    },
                                                    "txval": {
                                                        "description": "Taxable value of Goods or Service as per invoice",
                                                        "minLength": 1,
                                                        "type": "number"
                                                    },
                                                    "irt": {
                                                        "description": "IGST Rate as per invoice",
                                                        "type": "number"
                                                    },
                                                    "iamt": {
                                                        "description": "IGST Amount as per invoice",
                                                        "type": "number"
                                                    },
                                                    "crt": {
                                                        "description": "CGST Rate as per invoice",
                                                        "type": "number"
                                                    },
                                                    "camt": {
                                                        "description": "CGST Amount as per invoice",
                                                        "type": "number"
                                                    },
                                                    "srt": {
                                                        "description": "SGST Rate as per invoice",
                                                        "type": "number"
                                                    },
                                                    "samt": {
                                                        "description": "SGST Amount as per invoice",
                                                        "type": "number"
                                                    },
                                                    "csrt": {
                                                        "description": "Cess Rate as per invoice",
                                                        "type": "number"
                                                    },
                                                    "csamt": {
                                                        "description": "Cess Amount as per invoice",
                                                        "type": "number"
                                                    }
                                                },
                                                "required": [
                                                    "ty",
                                                    "txval"
                                                ]
                                            }
                                        }
                                    },
                                    "required": [
                                        "ctin",
                                        "txprd",
                                        "mid",
                                        "grsval",
                                        "itm"
                                    ]
                                }
                            }
                        },
                        "required": [
                            "ecom_ty",
                            "eInvoices"
                        ]
                    },
                    {
                        "properties": {
                            "ecom_ty": {
                                "type": "string",
                                "enum": [
                                    "Inter",
                                    "Intra"
                                ]
                            },
                            "chksum": {
                                "description": "Checksum Value",
                                "$ref": "#/definitions/chksum"
                            },
                            "flag": {
                                "description": "tax payer action",
                                "type": "string",
                                "enum": [
                                    "D"
                                ]
                            },
                            "eInvoices": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "ctin": {
                                            "description": "GSTIN/UID of the Receiver taxpayer/UN,Govt Bodies",
                                            "$ref": "#/definitions/gstin"
                                        },
                                        "txprd": {
                                            "description": "Tax Period",
                                            "minLength": 1,
                                            "type": "string"
                                        },
                                        "mid": {
                                            "description": "Merchant ID issued by e-commerce portal",
                                            "type": "string",
                                            "minLength": 1,
                                            "maxLength": 20
                                        },
                                        "grsval": {
                                            "description": "Gross Value of supplies",
                                            "minLength": 1,
                                            "type": "number"
                                        },
                                        "itm": {
                                            "type": "array",
                                            "items": {
                                                "type": "object",
                                                "properties": {
                                                    "ty": {
                                                        "description": "Nature of Supply",
                                                        "type": "string",
                                                        "enum": [
                                                            "G",
                                                            "S"
                                                        ]
                                                    },
                                                    "hsn_sc": {
                                                        "description": "HSN or SAC of Goods or Services as per Invoice line items",
                                                        "type": "string",
                                                        "maxLength": 10
                                                    },
                                                    "txval": {
                                                        "description": "Taxable value of Goods or Service as per invoice",
                                                        "minLength": 1,
                                                        "type": "number"
                                                    },
                                                    "irt": {
                                                        "description": "IGST Rate as per invoice",
                                                        "type": "number"
                                                    },
                                                    "iamt": {
                                                        "description": "IGST Amount as per invoice",
                                                        "type": "number"
                                                    },
                                                    "crt": {
                                                        "description": "CGST Rate as per invoice",
                                                        "type": "number"
                                                    },
                                                    "camt": {
                                                        "description": "CGST Amount as per invoice",
                                                        "type": "number"
                                                    },
                                                    "srt": {
                                                        "description": "SGST Rate as per invoice",
                                                        "type": "number"
                                                    },
                                                    "samt": {
                                                        "description": "SGST Amount as per invoice",
                                                        "type": "number"
                                                    },
                                                    "csrt": {
                                                        "description": "Cess Rate as per invoice",
                                                        "type": "number"
                                                    },
                                                    "csamt": {
                                                        "description": "Cess Amount as per invoice",
                                                        "type": "number"
                                                    }
                                                },
                                                "required": [
                                                    "ty",
                                                    "txval"
                                                ]
                                            }
                                        }
                                    },
                                    "required": [
                                        "ctin",
                                        "txprd",
                                        "mid",
                                        "grsval",
                                        "itm"
                                    ]
                                }
                            }
                        },
                        "required": [
                            "ecom_ty",
                            "flag",
                            "chksum"
                        ]
                    }
                ]
            }
        },
        "hsn": {
            "type": "array",
            "items": {
                "type": "object",
                "anyOf": [
                    {
                        "properties": {
                            "flag": {
                                "description": "tax payer action",
                                "$ref": "#/definitions/flag"
                            },
                            "data": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "chksum": {
                                            "description": "Checksum Value",
                                            "$ref": "#/definitions/chksum"
                                        },
                                        "num": {
                                            "description": "Serial no",
                                            "type": "integer",
                                            "minLength": 1
                                        },
                                        "ty": {
                                            "description": "Nature of Supply",
                                            "type": "string",
                                            "enum": [
                                                "G",
                                                "S"
                                            ]
                                        },
                                        "hsn_sc": {
                                            "description": "HSN or SAC of Goods or Services as per Invoice line items",
                                            "type": "string",
                                            "pattern": "^[a-zA-Z0-9]+$"
                                        },
                                        "txval": {
                                            "description": "Taxable value of Goods or Service as per invoice",
                                            "minLength": 1,
                                            "type": "number"
                                        },
                                        "irt": {
                                            "description": "IGST Rate as per invoice",
                                            "type": "number"
                                        },
                                        "iamt": {
                                            "description": "IGST Amount as per invoice",
                                            "type": "number"
                                        },
                                        "crt": {
                                            "description": "CGST Rate as per invoice",
                                            "type": "number"
                                        },
                                        "camt": {
                                            "description": "CGST Amount as per invoice",
                                            "type": "number"
                                        },
                                        "srt": {
                                            "description": "SGST Rate as per invoice",
                                            "type": "number"
                                        },
                                        "samt": {
                                            "description": "SGST Amount as per invoice",
                                            "type": "number"
                                        },
                                        "desc": {
                                            "description": "Description of goods sold",
                                            "minLength": 1,
                                            "type": "string"
                                        },
                                        "uqc": {
                                            "description": "UQC (Unit of Measure) of goods sold",
                                            "minLength": 1,
                                            "type": "string"
                                        },
                                        "qty": {
                                            "description": "Quantity of goods sold",
                                            "minLength": 1,
                                            "type": "number"
                                        },
                                        "sply_ty": {
                                            "description": "Nature of Supply ",
                                            "minLength": 1,
                                            "type": "string",
                                            "$ref": "#/definitions/hsn_supply_typ"
                                        }
                                    },
                                    "required": [
                                        "ty",
                                        "txval",
                                        "desc",
                                        "uqc",
                                        "qty",
                                        "sply_ty"
                                    ]
                                }
                            }
                        },
                        "required": [
                            "data"
                        ]
                    },
                    {
                        "properties": {
                            "flag": {
                                "description": "tax payer action",
                                "type": "string",
                                "enum": [
                                    "D"
                                ]
                            },
                            "data": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "chksum": {
                                            "description": "Checksum Value",
                                            "$ref": "#/definitions/chksum"
                                        },
                                        "num": {
                                            "description": "Serial no",
                                            "type": "integer",
                                            "minLength": 1
                                        },
                                        "ty": {
                                            "description": "Nature of Supply",
                                            "type": "string",
                                            "enum": [
                                                "G",
                                                "S"
                                            ]
                                        },
                                        "hsn_sc": {
                                            "description": "HSN or SAC of Goods or Services as per Invoice line items",
                                            "type": "string",
                                            "pattern": "^[a-zA-Z0-9]+$"
                                        },
                                        "txval": {
                                            "description": "Taxable value of Goods or Service as per invoice",
                                            "minLength": 1,
                                            "type": "number"
                                        },
                                        "irt": {
                                            "description": "IGST Rate as per invoice",
                                            "type": "number"
                                        },
                                        "iamt": {
                                            "description": "IGST Amount as per invoice",
                                            "type": "number"
                                        },
                                        "crt": {
                                            "description": "CGST Rate as per invoice",
                                            "type": "number"
                                        },
                                        "camt": {
                                            "description": "CGST Amount as per invoice",
                                            "type": "number"
                                        },
                                        "srt": {
                                            "description": "SGST Rate as per invoice",
                                            "type": "number"
                                        },
                                        "samt": {
                                            "description": "SGST Amount as per invoice",
                                            "type": "number"
                                        },
                                        "desc": {
                                            "description": "Description of goods sold",
                                            "minLength": 1,
                                            "type": "string"
                                        },
                                        "uqc": {
                                            "description": "UQC (Unit of Measure) of goods sold",
                                            "minLength": 1,
                                            "type": "string"
                                        },
                                        "qty": {
                                            "description": "Quantity of goods sold",
                                            "minLength": 1,
                                            "type": "number"
                                        },
                                        "sply_ty": {
                                            "description": "Nature of Supply ",
                                            "minLength": 1,
                                            "type": "string",
                                            "$ref": "#/definitions/hsn_supply_typ"
                                        }
                                    },
                                    "required": [
                                        "ty",
                                        "txval",
                                        "desc",
                                        "uqc",
                                        "qty",
                                        "sply_ty"
                                    ]
                                }
                            }
                        },
                        "required": [
                            "flag",
                            "chksum"
                        ]
                    }
                ]
            }
        }
    },
    "required": [
        "gstin",
        "fp"
    ],
    "definitions": {
        "nonEmptyString": {
            "type": "string",
            "minLength": 1
        },
        "nonEmptyCost": {
            "type": "number",
            "multipleOf": 0.01,
            "maxLength": 15
        },
        "nonEmptydate": {
            "type": "string",
            "minLength": 1,
            "pattern": "^((0[1-9]|[12][0-9]|3[01])[-](0[1-9]|1[012])[-]((19|20)\\d\\d))$"
        },
        "gstin": {
            "type": "string",
            "maxLength": 15,
            "minLength": 15,
            "pattern": "^[a-zA-Z0-9._\\s]+$"
        },
        "etin": {
            "type": "string",
            "maxLength": 15,
            "minLength": 15,
            "pattern": "^[a-zA-Z0-9._\\s]+$"
        },
        "chksum": {
            "type": "string",
            "pattern": "^[a-zA-Z0-9]+$"
        },
        "inum": {
            "type": "string",
            "maxLength": 50,
            "minLength": 1,
            "pattern": "^[a-zA-Z0-9]+$"
        },
        "state_cd": {
            "type": "string",
            "description": "Recipient state code",
            "pattern": "^(3[0-7]|[12][0-9]|0[1-9]|99)$",
            "maxLength": 2,
            "minLength": 2
        },
        "flag": {
            "type": "string",
            "enum": [
                "N",
                "M",
                "A",
                "R"
            ]
        },
        "ntty": {
            "type": "string",
            "enum": [
                "C",
                "D"
            ]
        },
        "hsn_supply_typ": {
            "type": "string",
            "enum": [
                "INTRB2B",
                "INTRAB2B",
                "INTRB2CL",
                "INTRAB2CL"
            ]
        },
        "status": {
            "type": "string",
            "enum": [
                "A",
                "R",
                "P",
                "N",
                "S"
            ]
        },
        "boolean": {
            "type": "string",
            "enum": [
                "Y",
                "N"
            ]
        }
    }
};

const log = (type) => console.log.bind(console, type);

render((
  <Form schema={schema}
        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")} />
), document.getElementById("app"));



