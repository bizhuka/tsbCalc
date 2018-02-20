sap.ui.define([ 'jquery.sap.global', 'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel' ],
		function(jQuery, Controller, JSONModel) {
			"use strict";

			var currencyType = new sap.ui.model.type.Currency();
			var PageController = Controller.extend("tsbcalculator.Main", {

				onInit : function() {

					// set explored app's demo model on this sample
					var oModel = new JSONModel(jQuery.sap.getModulePath(
							"program.root", "/data.json"));
					this.getView().setModel(oModel);
				},

				format_currency : function(value, currency) {
					switch (currency) {
						case 'KZT':
							currency = '₸';
							break;
	
						case 'RUB':
							currency = '₽';
							break;
	
						case 'USD':
							currency = '$';
							break;
	
						case 'EUR':
							currency = '€';
							break;

					}
					return Math.round(value).toLocaleString() + " " + currency;
				},
				
				what : function(){
					return "what"
				},
				
				calculateSum : function(open_sum, amount, currency, rate, cap, year_days, month) {
					  return this.calculate(open_sum, amount, currency, rate, cap, year_days, month, "sum")
			    },
			    
				calculateAccSum : function(open_sum, amount, currency, rate, cap, year_days, month) {
					  return this.calculate(open_sum, amount, currency, rate, cap, year_days, month, "acc_sum")
			    },
			    
				calculate : function(open_sum, amount, currency, rate, cap, year_days, month, field) {					
					var month_days = [];
					var sum = [];
					var acc = [];
					var i = 1;
					open_sum = parseFloat(open_sum);
					amount = parseFloat(amount);
					
					year_days = parseInt(year_days);					
					switch (year_days) {
					 case 365:
						month_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
						break;

					 case 360:
						month_days = [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30];
						break;
						
					 default:
						return "err";
					}
					rate = rate / 100;
					
			        sum[0] = open_sum; // + amount;
			        var pSum = sum[0];
			        acc[0] = 0;
			        
			        if(cap)
			        {
			            for ( i = 1; i <= month; i++ )
			            {
			                sum[i] = sum[i-1] + (sum[i-1]*rate/year_days*month_days[(i-1) % 12]) + amount;
			                acc[i] = sum[i-1]*rate/year_days*month_days[(i-1) % 12];
			            }
			        }
			        else
			        {            
			            for ( i = 1; i <= month; i++ )
			            {
			                sum[i] = sum[i-1] + pSum*rate/year_days*month_days[(i-1) % 12] + amount;
			                acc[i] = pSum*rate/year_days*month_days[(i-1) % 12];
			                pSum = pSum + amount;
			            }
			        }

			        var acc_sum = 0;
			        for ( i = 1; i <= month; i++ )
			            acc_sum += acc[i];
			       
			        // And send result
					switch (field) {
					 case "sum":
						return this.format_currency(sum[month], currency);

					 case "acc_sum":
						return this.format_currency(acc_sum, currency);
					}
				},
					
				onSelectionChange : function() {
					var oView = this.getView();
					var oTable = oView.byId("id_alv");
					var lv_dep_name = oView.byId("id_dep_name")
							.getSelectedKey();
					var lv_currency = oView.byId("id_currency")
							.getSelectedKey();
					var lv_period = oView.byId("id_period").getSelectedKey();

					var oBinding = oTable.getBinding("items");

					var aFilters = [];
					if (lv_dep_name) {
						var oFilter = new sap.ui.model.Filter("name", "EQ",
								lv_dep_name);
						aFilters.push(oFilter);
					}

					if (lv_currency) {
						var oFilter = new sap.ui.model.Filter("currency", "EQ",
								lv_currency);
						aFilters.push(oFilter);
					}

					if (lv_period) {
						var oFilter = new sap.ui.model.Filter("period", "EQ",
								lv_period);
						aFilters.push(oFilter);
					}
					oBinding.filter(aFilters);
				}
			});

			return PageController;

		});

// sap.ui.controller("tsbcalculator.Main", {
/**
 * Called when a controller is instantiated and its View controls (if available)
 * are already created. Can be used to modify the View before it is displayed,
 * to bind event handlers and do other one-time initialization.
 * 
 * @memberOf tsbcalculator.Main
 */
// onInit: function() {
//
// },
/**
 * Similar to onAfterRendering, but this hook is invoked before the controller's
 * View is re-rendered (NOT before the first rendering! onInit() is used for
 * that one!).
 * 
 * @memberOf tsbcalculator.Main
 */
// onBeforeRendering: function() {
//
// },
/**
 * Called when the View has been rendered (so its HTML is part of the document).
 * Post-rendering manipulations of the HTML could be done here. This hook is the
 * same one that SAPUI5 controls get after being rendered.
 * 
 * @memberOf tsbcalculator.Main
 */
// onAfterRendering: function() {
//
// },
/**
 * Called when the Controller is destroyed. Use this one to free resources and
 * finalize activities.
 * 
 * @memberOf tsbcalculator.Main
 */
// onExit: function() {
//
// }
// });
