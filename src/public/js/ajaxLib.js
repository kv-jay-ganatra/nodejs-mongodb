function ajaxGet(url, callbackfunction, funparameters) {
  $.getJSON(url,
      function(data) {
        const ajaxcallbackfunction = window[callbackfunction];
        if (ajaxcallbackfunction) {
          if (funparameters != null) {
            ajaxcallbackfunction(funparameters);
          } else {
            ajaxcallbackfunction();
          }
        } else {
          if (callbackfunction != null) {
            callbackfunction(data, funparameters);
          }
        }
      },
  );
}

function ajaxPost(url, data, callbackfunction, funparameters) {
  $.ajax({
    cache: false,
    type: 'POST',
    data: data,
    url: url,
    async: true,
    beforeSend: function() {
      $(LoaderInit());
    },
    complete: function() {
      $(LoaderEnd());
    },
    success: function(data) {
      const ajaxcallbackfunction = window[callbackfunction];
      if (ajaxcallbackfunction) {
        if (funparameters != null) {
          ajaxcallbackfunction(funparameters);
        } else {
          ajaxcallbackfunction();
        }
      } else {
        if (callbackfunction != null) {
          callbackfunction(data, funparameters);
        }
      }
    },
    error: function(xhr, ajaxOptions, thrownError) {
      $(LoaderEnd());
    },
  });
}


function ajaxPartial(url, type, parameters, targetDiv, callbackfunction, funparameters) {
  $.ajax({
    cache: false,
    type: type,
    url: url,
    // async: true,
    data: parameters,
    beforeSend: function() {
      $(LoaderInit());
    },
    complete: function() {
      $(LoaderEnd());
    },
    success: function(data) {
      targetDiv.html(data);
      const ajaxcallbackfunction = window[callbackfunction];
      if (ajaxcallbackfunction) {
        if (funparameters != null) {
          ajaxcallbackfunction(funparameters);
        } else {
          ajaxcallbackfunction();
        }
      } else {
        if (callbackfunction != null) {
          callbackfunction(data, funparameters);
        }
      }
    },
    error: function(xhr, ajaxOptions, thrownError) {
      // alert('Failed to load.');
      $(LoaderEnd());
    },
  });
}

function ajaxLoadUrl(divSelector, url, callbackFunction) {
  $.ajax({
    url: url,
    cache: false,
    success: function(result) {
      $(divSelector).html(result);
      if (callbackFunction) {
        callbackFunction(result);
      }
    },
  });
}
