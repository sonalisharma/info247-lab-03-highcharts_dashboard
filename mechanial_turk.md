# Mechanical turk experiment

Below is the sequence of steps followed to set up a mechanical turk experiment. You need to create an amazon account and log in as a requestor to set up the experiment. Setting up an account as a requestor also involves providing credit card details and keeping some credit in the amazon account.

- First we need to do a **Project Setup** where we do the following:
	- define the template to be used for the task
	- the amount to be paid to the turkers (along with other task specific settings)
	- the workers qualifications/task requirements. 

- Second step is to convert the project into a **batch** 

	**Note:** In a batch mode, you can configure the project for multiple inputs. e.g. in our case all the text on the task was the same but the images changed. So I set up the project first where I defined the layout and made image a variable. 	
Then in the batch mode, I uploaded a csv file where location of the images were defined. Hence I was able to create multiple tasks one each for 50 images using the same project.

These two steps have been defined in detail below:


##Project SetUp

### Step1:
**Log in as a Requestor** and Click on **Get Started** to create a new Project. 

Click on **New Project** to view various templates. I selected **Tagging of an Image** option because I could use that template to insert images and text alongside. There are other templates to explore too.


### Step2:
Enter general project details. Provide information about HITS.

**Reward per assignment:** How much each worker will be paid

**Number of assignments per HIT:** How many unique workers do you want for each assignment. I set this to 3.

**HITS setup**

![http://i58.tinypic.com/2iavcli.png](http://i58.tinypic.com/2iavcli.png)

Under Advanced settings, Select Customize Worker Requirements as shown in the image below:

**Advanced Requirements**

![http://i62.tinypic.com/2hfuwyx.png](http://i60.tinypic.com/iz8boz.png)

### Step3:
**Designing the task** 

Once you choose a template, it can be used directly or you can define your own design by typing into the text area or modifying the html code (Click on Source  to change the html).

**Note**: All items that are dynamic in the template (e.g. images) can be defined using a variable. Later, while creating a batch the value of these variables can be defined in a csv file. This has been described under **Batch SetUp**

![http://i59.tinypic.com/16iw46v.png](http://i59.tinypic.com/16iw46v.png)


### Step4:
Preview and Finish the project setup.

##Batch SetUp
Once an individual task is setup, the next step is to setup a batch where the input can be provided through a csv file.

Click on **New Batch with an Existing Project** and then choose the file for input.I used the following file

[Input file](https://drive.google.com/file/d/0B0dgmsP7LRkbQlBEZkw5YWp1SEE/edit?usp=sharing)

Once the file has been upload preview every task in the batch and then Finish.


##Results
The results can be viewed using the **Manage** tab as shown below. This lets you track the progress of the batch and also view results. 

![http://i59.tinypic.com/2uf3y2f.png](http://i59.tinypic.com/2uf3y2f.png)

The results can be downloaded in a csv format by clicking on the Result button
Attached is a sample result file that we got from our experiment.

[Results csv](https://drive.google.com/file/d/0B0dgmsP7LRkbOW1ueUI5UXg2cG8/edit?usp=sharing)

**Note:** You can also review the results and mark a task for approval or rejection on the downloaded csv file itself. This file can then be uploaded back on the same Results page (Click on **Upload csv** after marking the tasks appropriately on the Results csv), this helps you approve or reject the tasks in bulk and also pay the workers for an approved task. The csv also helps you easily identify if the same worker worked on multple tasks. In that case we may chose you accept only one task from such worker and reject the rest.

![http://i61.tinypic.com/350sa3q.png](http://i61.tinypic.com/350sa3q.png)


