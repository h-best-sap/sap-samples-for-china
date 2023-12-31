sap.ui.define(
  [
    "sap/ui/core/Fragment",
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
  ],
  function (Fragment, Controller, JSONModel) {
    "use strict";

    let PageController = Controller.extend(
      "sap.ui.layout.sample.SimpleForm354wide.Page",
      {
        onInit: function (oEvent) {
          // set explored app's demo model on this sample
          let oModel = new JSONModel(
            sap.ui.require.toUrl("sap/ui/demo/mock/supplier.json")
          );
          oModel.attachRequestCompleted(
            function () {
              this.byId("edit").setEnabled(true);
            }.bind(this)
          );
          this.getView().setModel(oModel);

          this.getView().bindElement("/SupplierCollection/0");

          this._formFragments = {};

          // Set the initial form to be the display one
          this._showFormFragment("Display");
        },

        handleEditPress: function () {
          //Clone the data
          this._oSupplier = Object.assign(
            {},
            this.getView().getModel().getData().SupplierCollection[0]
          );
          this._toggleButtonsAndView(true);
        },

        handleCancelPress: function () {
          //Restore the data
          let oModel = this.getView().getModel();
          let oData = oModel.getData();

          oData.SupplierCollection[0] = this._oSupplier;

          oModel.setData(oData);
          this._toggleButtonsAndView(false);
        },

        handleSavePress: function () {
          this._toggleButtonsAndView(false);
        },

        _toggleButtonsAndView: function (bEdit) {
          let oView = this.getView();

          // Show the appropriate action buttons
          oView.byId("edit").setVisible(!bEdit);
          oView.byId("save").setVisible(bEdit);
          oView.byId("cancel").setVisible(bEdit);

          // Set the right form type
          this._showFormFragment(bEdit ? "Change" : "Display");
        },

        _getFormFragment: function (sFragmentName) {
          let pFormFragment = this._formFragments[sFragmentName],
            oView = this.getView();

          if (!pFormFragment) {
            pFormFragment = Fragment.load({
              id: oView.getId(),
              name: "sap.ui.layout.sample.SimpleForm354wide." + sFragmentName,
            });
            this._formFragments[sFragmentName] = pFormFragment;
          }

          return pFormFragment;
        },

        _showFormFragment: function (sFragmentName) {
          let oPage = this.byId("page");

          oPage.removeAllContent();
          this._getFormFragment(sFragmentName).then(function (oVBox) {
            oPage.insertContent(oVBox);
          });
        },
      }
    );

    return PageController;
  }
);
