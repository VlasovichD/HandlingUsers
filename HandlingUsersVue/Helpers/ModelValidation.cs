using HandlingUsersVue.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System.Text.RegularExpressions;

namespace HandlingUsersVue.Helpers
{
    /// <summary>
    /// Filter for returning a result if the given model to a controller does not pass validation
    /// </summary>
    public class ValidatorActionFilter : IActionFilter
    {
        public void OnActionExecuting(ActionExecutingContext filterContext)
        {
            if (!filterContext.ModelState.IsValid)
            {
                filterContext.Result = new BadRequestObjectResult(filterContext.ModelState);
            }
        }

        public void OnActionExecuted(ActionExecutedContext filterContext)
        {

        }
    }

    public class ValidateModelAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            if (!context.ModelState.IsValid)
            {
                context.Result = new BadRequestObjectResult(context.ModelState);
            }
        }
    }

    public class ModelValidation : ControllerBase
    {
        public void ValidateModel(UserModel user)
        {
            if (user == null)
            {
                ModelState.AddModelError("", "No data for user");
            }

            if (string.IsNullOrWhiteSpace(user.Name))
            {
                ModelState.AddModelError("Name", "Name is not set");
            }

            if (user.Name.Length > 50)
            {
                ModelState.AddModelError("Name", "Name must be no more than 50 letters");
            }

            if (!Regex.IsMatch(user.Name, @"^[A-Za-z\s]+$"))
            {
                ModelState.AddModelError("Name", "Name must have only letters and spaces");
            }

            if (string.IsNullOrWhiteSpace(user.Email))
            {
                ModelState.AddModelError("Email", "Email is not set");
            }

            if (!Regex.IsMatch(user.Email, @"^[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\.)+[A-Z]{2,6}$", RegexOptions.IgnoreCase))
            {
                ModelState.AddModelError("Email", "Email is not valid");
            }

            if (user.Skype.Length > 50)
            {
                ModelState.AddModelError("Skype", "Skype must be no more than 50 symbols");
            }

            if (user.Signature.Length > 280)
            {
                ModelState.AddModelError("Signature", "Signature must be no more than 280 letters");
            }
        }
    }
}
