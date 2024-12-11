Contents
    

- [Problem summary](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_a#problem-summary)
    -   - [Input and output format 1](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_a#input-and-output-format-1)
-   - [Input and output format 2](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_a#input-and-output-format-2)
-   - -   -   - [$\mathrm{grid\_info}$ details](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_a#mathrmgrid_info-details)
-   -   - [$\mathrm{EV\_info}$ details](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_a#mathrmev_info-details)
- [Problem details](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_a#problem-details)
    -   - [Map information](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_a#map-information)
-   - [Asset information](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_a#asset-information)
-   - [Energy demand](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_a#energy-demand)
-   - [Energy supply](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_a#energy-supply)
-   - [Scoring](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_a#scoring)
-   - [Query details](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_a#query-details)
-   - [Constraints for Input and Output](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_a#Constraints-for-input-and-output)
- [Sample Code A](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_a#sample-code-A)

    

    

    
    
    

## Problem summary

A project to stably supply electricity from renewable energy to a region with distributed small power grids (nanogrids) has been launched aiming to achieve low-carbon society. The supplied electricity will be used not only in the electricity demand areas, but also for transporting people and goods by electric vehicles (EVs).

In this problem, you will take on the role of an area designer of the project. You will design a layout of nanogrids which can provide stable energy supply and smooth transportation services by making good use of the simulator developed by the development department. If the facility layout you designed can operate with a low environmental load and can supply power smoothly even in the event of a wide-area power outage, additional points will be obtained.

We have prepared the sample code for beginners. You can use [this code](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_a#sample-code-A) as necessary.

![](https://img.atcoder.jp/hokudai-hitachi2021/2cd1d374d2dc794b44ed416c6cf23957.png)

Fig.1 A flow of problem A. Illustration shows overview and answer items for problem A.

<br>

![](https://img.atcoder.jp/hokudai-hitachi2021/bf914083d1c23fa86b9f29dd45aff854.png)

Fig.2 Example of a design with specified budget limit of 70 million yen. In addition to designing equipment installation in each nanogrid, position of nanogrids, initial position and initial storage amount of each EV are also designed and submitted elsewhere.

First, the input and output format will be described.

## Input and output format 1

First, the contestants will get the information they need from the judges. The input/output format at that time is as follows.

Contestant
Judge

$\mathrm{query}_1$

$\mathrm{output}_1$

$\mathrm{query}_2$

$\mathrm{output}_2$

$\vdots$
$\vdots$

$\mathrm{query}_M$

$\mathrm{output}_M$

$\mathrm{"end"}$

- Each time you output a $\mathrm{query}$, the corresponding information is given from the standard input. The contestant needs to flush the standard output every time it outputs a $\mathrm{query}$. In addition, it needs to read through all the inputs every time it outputs a $\mathrm{query}$ otherwise undefined behavior will occur.
- <p>`end` is required to terminate your query at the end of your output. The judge moves to the next operation by reading `end`. If `end` is not provided, undefined behavior will occur.</p>
- <p>a valid $\mathrm{query}$ is as follows. In the case of an invalid $\mathrm{query}$, `WA` (wrong answer) is returned.</p>
- `budget`
- `temporal`
- `score`
- `graph`
- `demand`
- `demand [day] [id]`
- `radiation [day] [id]`
- `asset`
- `asset PV [id]`
- `asset FE [id]`
- `asset RB [id]`
- `asset EVC [id]`
- `asset vehicle [id]`
- `order [day]`
- `shelter`
- `end`
- The output information corresponding to each $\mathrm{query}$ is described in [Query details](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_a#query-details).

## Input and output format 2

After completing the instructions in the section titled Input and output format 1, the contestant will output the nanogrid and EV facility layout in the following format.

First, the contestant will output the number of nanogrids to be installed, $N_\mathrm {grid}$.

> $\begin{aligned}N_\mathrm{grid}\end{aligned}$

Next, the information of each nanogrid is outputted in the following format.

> $\begin{aligned}& \mathrm{grid\_info}_1 \\& \vdots \\& \mathrm{grid\_info}_{N_\mathrm{grid}} \\\end{aligned}$

- The information of each nanogrid is outputted as $\mathrm{grid\_info}$ for $N_\mathrm{grid}$ lines. The details of $\mathrm{grid\_info}$ will be described later.
- The electricity demand of nanogrids installed outside the preset electricity demand areas is always $0$.
- For each nanogrid, if the land area required for PV installation exceeds the area of which PV installation is possible at each vertex ($A_i$ in `graph`), it is `WA`.
- If you try to install the nanogrid multiple times at the same vertex, the last installation will be effective.
- IDs are assigned to the nanogrid in the order of installation, and each nanogrid will be referred by this ID thereafter. Note that this ID is different from the ID of the electricity demand area.

Next, the contestant will output the number of EVs, $N_\mathrm{EV}$.

> $\begin{aligned}N_\mathrm{EV}\end{aligned}$

Next, the information of each EV is outputted in the following format.

> $\begin{aligned}& \mathrm{EV\_info}_1 \\& \vdots \\& \mathrm{EV\_info}_{N_\mathrm{EV}}\end{aligned}$

- The information of each EV is outputted as $\mathrm{EV\_info}$ for $N_\mathrm{EV}$ lines. The details of $\mathrm{EV\_info}$ will be described later.
- IDs are assigned to EVs in the order of installation, and and each EV will be referred by this ID thereafter.

At the end, the contestant will output the following specified command format as follows.

> $\begin{aligned}\mathrm{command} & & \mathrm{day} & & \text{opt}_1\end{aligned}$

- The first argument is a character string that specifies the execution form either `test` or `submit`. The valid strings are as follows.
- `test`: Executes the test of the date specified by the second argument, $\mathrm{day}$, with the specified nanogrid and EV layout that the contestant output, and returns the score of that day to a standard input. The returned scored with `test` query is as follows:
<p>$S_\mathrm{trans}\quad S_\mathrm{ele}\quad S_\mathrm{env}$</p>
The contestant must read the returned score otherwise it is `WA`. It is noted that the execution time is set by the (judge's) CPU time.
- `submit`: Submits the specified nanogrid and EV layout as an answer. With this `submit` command, the $\mathrm{day}$ is ignored. The constant process must be terminated immediately after the `submit` output otherwise undefined behavior will occur.
- The second argument specifies the date to run the test. The valid date ranges from the first day to the $N_\mathrm{day}$. Otherwise, it is `WA`.
- The third argument specifies the number of EVs dedicated to energy control among nanogrids.

### $\mathrm{grid\_info}$ details

### Input and output format

> $\begin{aligned}& x^\mathrm{grid}_\mathrm{pos} & & \mathrm{Chg}^\mathrm{grid}_\mathrm{init} \\& \mathrm{type}^\mathrm{grid}_\mathrm{PV} & & A^\mathrm{grid}_\mathrm{PV} \\& \mathrm{type}^\mathrm{grid}_\mathrm{FE} \\& \mathrm{type}^\mathrm{grid}_\mathrm{RB} & & A^\mathrm{grid}_\mathrm{RB} \\& \mathrm{type}^\mathrm{grid}_\mathrm{EVC}\end{aligned}$

### Details

- In the first line, $x^\mathrm{grid}_\mathrm{pos}$ and $\mathrm{Chg}^\mathrm{grid}_\mathrm{init}$ represent the position and the initial storage amount of a nanogrid.
- The following 4 lines specify the type and amount of facilities (PV, FE, RB and EVC) to be installed at the nanogrid. Only one type of PV, FE, RB, and EVC product can be installed.
- The following line represents the configuration of PV equipment. $\mathrm{type}^\mathrm{grid}_\mathrm{PV}$ represents type of PV product and $A^\mathrm{grid}_\mathrm{PV}$ represents amount of the PV product to be installed <font color="red">in terms of power generation capacity.</font>
- The following line represents the configuration of FE equipment. $\mathrm{type}^\mathrm{grid}_\mathrm{FE}$ represents type of FE product.
- The following line represents the configuration of RB equipment. $\mathrm{type}^\mathrm{grid}_\mathrm{RB}$ represents type of RB product and $A^\mathrm{grid}_\mathrm{RB}$ represents amount of the RB product to be installed.
- The following line represents the configuration of EVC equipment. $\mathrm{type}^\mathrm{grid}_\mathrm{EVC}$ represents type of EVC product.
- For PV installation, the following constraints must be met:
<p>$A^\mathrm{PV} A^\mathrm{grid}_\mathrm{PV} \leq A_{x^\mathrm{grid}_\mathrm{pos}}$</p>
where, $A^\mathrm{PV}$ is the required area per PV power generation capacity, $A^\mathrm{grid}_\mathrm{PV}$ is amount of the PV product to be installed and $A_{x^\mathrm{grid}_\mathrm{pos}}$ is the area where PV can be introduced at the vertex where the nanogrid is to be installed.

### $\mathrm{EV\_info}$ details

### Input and output format

> $\begin{aligned}& x^\mathrm{EV}_\mathrm{pos} & & \mathrm{Chg}^\mathrm{EV}_\mathrm{init} & & \mathrm{type}_\mathrm{EV}\end{aligned}$

### Details

- At $t = 0$, EV position is set to $x^\mathrm{EV}_\mathrm{pos}$, initial EV charged amount is set to $\mathrm{Chg}^\mathrm{EV}_\mathrm{init}$, and the product type of EV is $\mathrm{type}_\mathrm{EV}$.
- The vertex $x^\mathrm{EV}_\mathrm{pos}$ must be a vertex where a nanogrid is installed.

## Problem details

## Map information

Map information is given as a simple undirected graph with a set of vertices and a set of edges. The graph represents a road network on which the movement and charge/discharge of electric vehicles (EV) occur. Each vertex is placed on a two-dimensional plane, and the population and the installed capacity of solar power generation facilities are specified. In addition, energy demand is set for some of the vertices.

## Asset information

One nanogrid consists of photovoltaics (PV), a private generator equipped with fuel engines (FE), a storage rechargeable battery (RB), and an EV charge/discharge device or EV charger (EVC). When installing the nanogrid, it is also necessary to specify the configuration for these facilities.

The features of each facility are as follows:

- PV: The power generated by the PV is proportional to the amount of solar radiation which is given for each vertex at each time interval. Once a PV is installed, no additional cost is required. However, if you try to install more than the installed capacity of each vertex, it will be defined as `WA` (wrong answer). Therefore, the following constraints must be fulfilled for PV installation.
<p>$A^\mathrm{PV} A^\mathrm{grid}_\mathrm{PV} \leq A_i$</p>
where, $A^\mathrm{PV}$ is the required area per PV power generation capacity, which is the installation specification, $A^\mathrm{grid}_\mathrm{PV}$ is amount of the PV product to be installed and $A_i$ is the area of which PV installation is possible at the vertices where the nanogrid is to be installed.
- FE:  The power is generated by consuming fuel. When power generation from PV is insufficient, the power from FE is applied in order to compensate the shortage of electricity. Installation costs per output power are cheap and weather-independent power generation is possible. However, additional fuel costs are required for power generation.
- RB:  The rechargeable batteries are charged when power excess occurs, and are discharged when power shortage occurs. At the time of simulation, the initial storage amount at the beginning of the day can be specified arbitrarily.
- EVC: It connects PV, FE, RB, and share load among one another, and also inputs and outputs power between a nanogrid and external devices such as electric vehicles.

If the amount of power generated by these facilities and the charge/discharge amount by EV are insufficient to power load and a power shortage occurs, the power will be compensated by purchasing from an existing electric system (energy from the grid).

For selection of EVs, an EV catalog will be provided.　See details in [Asset vehicles information](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_a#asset-vehicle-info)

The initial costs of all above facilities and EVs are required. The standard amount of initial cost (Budget limit) can be obtained in the section titled "Input and output format 1". If the initial cost of your designed system exceeds the standard amount, the score will be penalized.

## Energy demand

Energy demand is set for some of the vertices in the area. The location and the predicted energy demand can be obtained at the start of the test case.

## Energy supply

Energy supply is preferentially covered by PV, and the difference between EV charge/discharge and energy demand is aggregated in RB. The FE operates when energy supply from PV is insufficient and power shortage occurs. If a power shortage exceeds the maximum output of the FE, the power will be compensated by purchasing from an existing electric system (energy from the grid).

- **Amount of PV power generation**: The amount of PV power generation is given by the product of the amount of solar radiation and the installed PV capacity in the time interval. Please see details in [Input and output format 2](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_a#%E5%85%A5%E5%87%BA%E5%8A%9B%E5%BD%A2%E5%BC%8F%EF%BC%92)
- **Amount of FE power generation**: When the sum of PV power generation amount, EV charge/discharge amount, and energy demand exceeds the RB charge amount, FE operates to compensate for the shortfall. If the shortfall exceeds the maximum output of FE, the excess power will be compensated by purchasing from the grid.
- **RB charge amount**: RB works to compensate for short-term energy supply and demand imbalances. At each time, the difference between the sum of the PV power generation amount and EV charge/discharge amount and the energy demand is aggregated into the RB storage amount. In the other words, if the sum of the PV power generation amount and the charge amount from the EV to the nanogrid exceeds the sum of the energy demand and the charge amount from the nanogrid to the EV, the RB storage amount increases, and vice versa. If the battery capacity of RB is full and power generated in nanogrid is still excess, the surplus power is automatically abandoned.

Although the following content is what the judge performs in the daily operations and the contestant do not give direct instructions, they are described for consideration of designing facility layout and understanding of daily operations.

#### Transportation request and vehicles

##### Transportation request
Based on a transportation request, an EV picks up the order at a starting point and transports it to a destination.The probability of occurrence of transportation requests is based on the consideration that (1) the spatial probability distribution is proportional to the population at each vertex, and (2) the temporal probability distribution follows the Poisson distribution (for details, refers to "Input and output format 1","Transportation Request Information"). Transportation requests occur online, and each request has the following internal states. Here, all variables are integers.

- Order ID $\mathrm{id}$: All orders are assigned with IDs in the order when they occur. The allocation of order ID for orders that occur at the same time is not specified.
- Order generated time $\mathrm{ordered}$: Time that an order occurs
- Order start position $p^\mathrm{order}$: A position (a vertex) that an order occur, in other word, a position that an order will be picked up.
- Order destination position $d^\mathrm{order}$: A position (a vertex) that an order will be delivered after picked up. Upon arrival loading and unloading will be done automatically.
- Status $\mathrm{state}$: The status of the transportation order. $0$ indicates that it has not yet been picked up by any EV, and $1$ indicates that it has been picked up but has not yet arrived at the destination.

##### Vehicles
Judges operate multiple EVs by issuing the following commands at each time to adjust the power balance between nanogrids and response to transportation request.

- **Internal states**: each vehicle has the following internal states.
-   - EV charged capacity  $\mathrm{Chg}^\mathrm{EV}(t)$
-   - EV position  $(u^V, v^V, d^V)$ :  an EV is on edge $(u^V, v^V)$, and the distance between its current position and vertex $u^V$ is $d^V$.
- **EV operation command**
-   - `stay`: Let the EV stay in the same place. In this case, the EV does not consume electricity.
-   - `move w`:  Let the EV move with a unit of distance forward to the vertex `w`.
-   - `pickup a`:  The EV is working on the order ID `a`.
-   - `charge_from_grid d`:  Charge the EV from nanogrid at the EV position by the amount `d`.
-   - `charge_to_grid d`:  Charge nanogrid at the EV position from the EV by the amount `d`.
-   - Total amount of charge/discharge according to the above two items is aggregated and evaluated as $\Delta_\mathrm{EV}$ for each turn and each grid. For further information, please follow the link: [Energy balance details](#energy_balance_details)

## Scoring

The final score ($S$) is defined by the following equation:

$S = \sum_{i = 1}^{N_\mathrm{day}}w_{\mathrm{day}, i}S_i + w_\mathrm{acc}S_\mathrm{acc} - \alpha_\mathrm{cost}\max(0, C_\mathrm{total} - C_\mathrm{init})$

where $S_i$ is a score of the $i^\mathrm{th}$ day, $w_{\mathrm{day}, i}$ is a weighting factor for each $S_i$, $S_\mathrm{acc}$ is a disaster response score, $C_\mathrm{total}$ is a cost of the entire installed facilities and $\alpha_\mathrm{cost}$ is a coefficient for score conversion. The $S_i$ is defined by the following equation:

$S_i = w_\mathrm{trans}S_\mathrm{trans} + w_\mathrm{ele}S_\mathrm{ele} + w_\mathrm{env}S_\mathrm{env}$

where, $S_\mathrm{trans}$, $S_\mathrm{ele}$ and $S_\mathrm{env}$ represent transport score, energy score and environmental score respectively. $w_\mathrm{trans}$, $w_\mathrm{ele}$, $w_\mathrm{env}$, and $w_\mathrm{acc}$ are weighting factors for each score. Each score is determined by a test with the parameters of the corresponding day. For further details of each score, see the description below.

### Transportation score $S_\mathrm{trans}$

$S_\mathrm{trans} = \sum_{i \in \mathcal O^\mathrm{trans}} \max\left(0, \alpha^\mathrm{trans}_\mathrm{fee}\mathrm{dist}_i - \alpha^\mathrm{trans}_\mathrm{penalty}(T_{\mathrm{wait}, i} - T_i)^2\right)$

$\mathcal O^\mathrm{trans}$ is a set of order IDs completed by the end of the test case. $T_\mathrm{wait, i}$ is the time difference between the time that the order of ID $i$ is generated and the time that it is delivered at the order's destination. $T_i$ is the shortest travel time calculated from the shortest path length from order start position to order destination position of order ID $i$. $\alpha^\mathrm{trans}_\mathrm{fee}$ is the parameter corresponding to the fare income and $\alpha^\mathrm{trans}_\mathrm{penalty}$ is a penalty for delayed response in transportation requests.

### Energy score $S_\mathrm{ele}$

$S_\mathrm{ele} = \alpha^\mathrm{ele}C^\mathrm{balance} - \alpha^\mathrm{ele}_\mathrm{FE}\sum_{t = 0}^{T_\mathrm{max}}\sum_{i = 1}^{N_\mathrm{grid}}L^\mathrm{FE}_{i, t} - \alpha^\mathrm{ele}_\mathrm{buy}\sum_{t = 0}^{T_\mathrm{max}}\sum_{i = 1}^{N_\mathrm{grid}}L^\mathrm{buy}_{i, t}$

$C^\mathrm{balance} = \sum_{i = 1}^{N_\mathrm{EV}} C^{\mathrm{EV}_i}_{t = T_\mathrm{max}} + \sum_{i = 1}^{N_\mathrm{grid}} C^{\mathrm{grid}_i}_{t = T_\mathrm{max}} - \sum_{i = 1}^{N_\mathrm{grid}} C^{\mathrm{grid}_i}_{t = 0} - \sum_{i = 1}^{N_\mathrm{EV}} C^{\mathrm{EV}_i}_{t = 0} - \sum_{i = 1}^{N_\mathrm{EV}}\Delta^\mathrm{EV}_{\mathrm{move}, i}\mathrm{ret}_i$

where $C^\mathrm{balance}$ corresponds to the overall power balance, which is calculated as the sum of total amount of electricity stored in all EVs and all nanogrid at the time of $t = T_\mathrm{max}$ minus the sum of the total amount of initial electricity stored in all EVs and all nanogrid and the total amount of power required for the EVs to return to the initial EVs position. $L^\mathrm{FE}_{i, t}$ and $L^\mathrm{buy}_{i, t}$ are the power generated by FE at nanogrid $i$, at time $t$, and the power purchased from the grid by nanogrid $i$, respectively. $\alpha^\mathrm{ele}$, $\alpha^\mathrm{ele}_\mathrm{FE}$ and $\alpha^\mathrm{ele}_\mathrm{buy}$ are coefficients for energy score conversion.

<font color="red">If the nanogrid is not installed in the power demand area, all the power consumed in the power demand area where the nanogrid is not installed is treated as purchased from the grid.</font>

### Environmental score $S_\mathrm{env}$

$S_\mathrm{env} = - \alpha^\mathrm{env}_\mathrm{fuel} \sum_{t = 0}^{T_\mathrm{max}} \sum_{i = 1}^{N_\mathrm{grid}} L^\mathrm{FE}_{i, t} - \alpha^\mathrm{env}_\mathrm{buy} \sum_{t = 0}^{T_\mathrm{max}} \sum_{i = 1}^{N_\mathrm{grid}} L^\mathrm{buy}_{i, t}$

$\alpha^\mathrm{env}_\mathrm{fuel}$ and $\alpha^\mathrm{env}_\mathrm{buy}$ are coefficients for environmental score conversion.

### Disaster response score $S_\mathrm{acc}$

$S_\mathrm{acc} = \alpha^\mathrm{acc}\mathrm{Day}$

$\mathrm{Day}$ is the number of continuous uninterruptible days for a disaster event with a maximum of $N_\mathrm{acc}$. $\alpha^\mathrm{acc}$ is a coefficient for disaster response score conversion. The disaster response score will be calculated after $N_\mathrm{day}$ days test for transportation score, energy score, and environmental score. See below for details.

The disaster response score is calculated as follows.

1. A day in the test case is randomly selected, and the test starts from the initial storage amount specified by the contestant.
2.  A point of time in $\{1, \cdots , T^\mathrm{max}\}$ is randomly selected, and defined as disaster starting time $t_\mathrm{acc}$. The amount of electricity stored at the time $t_\mathrm{acc}$ during the test executed in 1. is recorded.
3. A new test starts. The initial storage amount is equal to the storage amount recorded in 2. After that, the test is continued as long as the uninterruptible operation is performed without receiving the power supply from the grid and within the range of the above-mentioned maximum number of continuous uninterruptible days $N_\mathrm{acc}$. During this period, the final amount of electricity stored on the previous day is used as the initial amount of electricity stored on the subsequent days. The additional electricity demand areas will appear at the location of the evacuation centers. For details, refer to the evacuation center information in [Input and output format 1](#input-and-output-format-1). Furthermore, no transport requests are generated during these tests.
4. The above disaster response test will be completed in up to $N_\mathrm{acc}$ days.

### <font color="red">Decision of final ranking</font>

<font color="red">In the system test, 400 test cases that differ from those during the contest period, are used, and the final ranking is determined by the total score of all testcases. The code of each Contestant, that is subject to the system test, is "the last submission code with AC status“. In addition, if there is a test case at which TLE or WA is obtained, the score for that test case will be 0 points. Please refer to the table below for a detailed breakdown of test cases. (Note that the generator will not be released.)</font>

![](https://img.atcoder.jp/hokudai-hitachi2021/sysstemtest_en2.png)

<font color="red">(1)3 types from published toolkits + 3 types from unpublished data (the number of vertices of all testcases is less than 10000)</font><br>
<font color="red">(2)A total of 4 types of solar radiation contains of 1 type of large amount, 1 type of small amount and 2 types of random amount of the radiation.
</font><br>
<font color="red">(3)Expected sum of the number of transportation requests is one-to-one correspondence with map data.
</font><br>
<font color="red">(4)Test cases where the execution time and memory consumption are larger than those used for ranking during the contest period are excluded.</font><br>
<font color="red">(5)Map data 6 types $\times$ solar radiation 4 types $\times$ budget 3 types $\times$ other parameters 4 types = 288 test cases</font><br>
<font color="red">(6)Select to include the cases where specific assets or conditions are advantageous in consideration of future technology and policy.<br>**(For example, a test case with large penalty ($\alpha^\mathrm{ele}_\mathrm{buy}$ and $\alpha^\mathrm{env}_\mathrm{buy}$) for purchasing power from an existing grid. A test case with relatively small amount of either $w_\mathrm{acc}, w_\mathrm{trans}, w_\mathrm{ele}$ or $w_\mathrm{env}$)**</font><br>

## Query details

### Budget information (`budget`)

### Input and output format

Contestant
Judge

$\mathrm{"budget"}$

$C_\mathrm{init}$

### Details

- $C_\mathrm{init}$ is the total budget specified for each test case.

### Time related information (`temporal`)

### Input and output format

Contestant
Judge

$\mathrm{"temporal"}$

$T_\mathrm{max} \quad T_\mathrm{last} \quad N_\mathrm{div} \quad N_\mathrm{day} \quad N_\mathrm{acc}$

### Details

- $T_\mathrm{max}$ is the number of steps per day. $T_\mathrm{last}$ is the final step in which transport orders can occur in a day.
- $T_\mathrm{max}$ is evenly divided into $N_\mathrm{div}$ intervals. Solar radiation information (`radiation [day] [id]`), energy demand information in detail (`demand [day] [id]`), and transportation request information (`order [day]`) are constant values ​​in each of these time intervals.
- $N_\mathrm{day}$ shows the number of days of data in a test case.
- $N_\mathrm{acc}$ shows the number of days of data in a test case that are used for the disaster response score calculation.

### Score related information (`score`)

### Input and output format

Contestant
Judge

$\mathrm{"score"}$

$\begin{aligned}& \alpha_\mathrm{cost} \\& w_{\mathrm{day}, 1} & & \cdots & & w_{\mathrm{day}, N_\mathrm{day}} \\& w_\mathrm{trans} & & w_\mathrm{ele} & & w_\mathrm{env} & & w_\mathrm{acc} \\& \alpha^\mathrm{trans}_\mathrm{fee} & & \alpha^\mathrm{trans}_\mathrm{penalty} \\& \alpha^\mathrm{ele} & & \alpha^\mathrm{ele}_\mathrm{FE} & & \alpha^\mathrm{ele}_\mathrm{buy} \\& \alpha^\mathrm{env}_\mathrm{fuel} & & \alpha^\mathrm{env}_\mathrm{buy} \\& \alpha^\mathrm{acc} \\\end{aligned}$

### Details

- The coefficients used for score calculation are listed in 7 lines. See [Scoring](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_a#scoring) for detailed formulas on how these coefficients are used.

### Graph related information (`graph`)

### Input and output format

Contestant
Judge

$\mathrm{"graph"}$

$\begin{aligned}& V & & E \\ & x_1 & & y_1 & & p_1 & & A_1 & & l_1 \\ & \vdots \\ & x_V & & y_V & & p_V & & A_V & & l_V \\ & u_1 & & v_1 & & d_1 \\ & \vdots \\ & u_E & & v_E & & d_E \\\end{aligned}$

### Details

- In the first line, the number of vertices $V$ and the number of edges $E$ of the graph are provided.
- In the following $V$ lines, information for each vertex is provided. The $i$-th line of the $V$ lines shows coordinates $(x_i, y_i)$ of vertex $i$, population $p_i$, the area of which PV installation is possible $A_i$, and cost per acquisition area $l_i$. The $i$-th line corresponds to the vertex number $i$.
- In the following $E$ lines, information for each edge is provided. The $i$-th line of the $E$ lines shows vertex $u_i$, vertex $v_i$ and the distance $d_i$ between the two vertices.

### Energy demand information (`demand`)

### Input and output format

Contestant
Judge

$\mathrm{"demand"}$

$N_\mathrm{demand}$

### Details

- $N_\mathrm{demand}$ is the number of electricity demand areas.

### Energy demand information in detail (`demand [day] [id]`)

### Input and output format

v

Contestant
Judge

$\mathrm{"demand"}\quad d \quad i$

$\begin{aligned}& x & & \sigma_D^2 \\& D^{\rm predict}_1 & & \cdots & & D^{\rm predict}_{N_{\rm div}} \\\end{aligned}$

### Details

- <p>Returns the predicted energy demand of the electricity demand areas specified by `i` on the day specified by `d`.</p>
- <p>In the first line, $x$ is vertex number of the vertex where the electricity demand area exists. $\sigma_D^2$ is the variance of the error of the predicted energy demand at each step. In brief, the error of the predicted energy demand at each step follows a normal distribution with an average of $0$ and a variance of $\sigma_D^2$.</p>
- <p>In the 2nd line, the predicted energy demand for each time interval is provided.The $i$-th column of the $N_{\rm div}$ columns is represented by $D^\mathrm{predict}_i$ indicating the predicted energy demand at time interval $i$.</p>

### Solar radiation information (`radiation [day] [id]`)

### Input and output format

Contestant
Judge

$\mathrm{"radiation"}\quad d \quad i$

$\begin{aligned}& R^{\rm predict}_1 & & \cdots & & R^{\rm predict}_{N_{\rm div}} \\\end{aligned}$

### Details

- Returns the predicted amount of solar radiation at the vertex `[id]` on the day `[day]`.
- $R^\mathrm{predict}_i$ represents the predicted amount of solar radiation at time interval $i$. About accuracy of the predicted amount of solar radiation, the amount of cumulative daily radiation is generally accurate, but the accuracy at each step is not guaranteed.

### Asset information (`asset`)

### Input and output format

Contestant
Judge

$\mathrm{"asset"}$

$\begin{aligned}& N_\mathrm{PV} \\& N_\mathrm{FE} \\& N_\mathrm{RB} \\& N_\mathrm{EVC} \\& N_V \\\end{aligned}$

### Details

- In the first line, $N_\mathrm{PV}$ is the number of types of PV equipments.
- In the following line, $N_\mathrm{FE}$ is the number of types of FE equipments.
- In the following line, $N_\mathrm{RB}$ is the number of types of storage rechargeable batteries.
- In the following line, $N_\mathrm{EVC}$ is the number of types of EVCs.
- In the following line, $N_V$ is the number of types vehicles.

### Asset PV information (`asset PV [pv_id]`)

### Input and output format

Contestant
Judge

$\mathrm{"asset\ PV"}\quad i$

$\begin{aligned}& A^\mathrm{PV} & & C^\mathrm{PV}_{\mathrm{init}} \\\end{aligned}$

### Details

- Return information of a product `i` of PV equipment. $A^\mathrm{PV}$ is the required area per PV power generation capacity and $C^\mathrm{PV}_\mathrm{init}$ is the cost per a unit of PV power generation capacity.
- A valid PV `i` is an integer ranging from 1 to $N_\mathrm{PV}$.

### Asset FE information (`asset FE [fe_id]`)

### Input and output format

Contestant
Judge

$\mathrm{"asset\ FE"}\quad i$

$\begin{aligned}& P^\mathrm{FE}_\mathrm{max} & & C^\mathrm{FE}_\mathrm{init}\\\end{aligned}$

### Details

- Return information of a product `i` of FE equipment. $P^\mathrm{FE}_\mathrm{max}$ is the maximum output power, and $C^\mathrm{FE}_\mathrm{init}$ is the initial cost for a FE equipment.
- A valid FE `i` is an integer ranging from 1 to $N_\mathrm{FE}$.
- <font color="red">A product with $P^\mathrm{FE}_\mathrm{max} = C^\mathrm{FE}_\mathrm{init} = 0$ is listed in the FE catalog. If you would not install a FE equipment at a nanogrid, please select this product.</font>

### Asset RB information (`asset RB [rb_id]`)

### Input and output format

Contestant
Judge

$\mathrm{"asset\ RB"}\quad i$

$\begin{aligned} & \mathrm{Cap}^\mathrm{RB} & & C^\mathrm{RB}_\mathrm{init} \\\end{aligned}$

### Details

- Return information of a product `i` of a storage rechargeable battery. $\mathrm{Cap}^\mathrm{RB}$ is the battery capacity, and $C^\mathrm{RB}_\mathrm{init}$ is the initial cost per unit of a battery.
- A valid RB `i` is an integer ranging from 1 to $N_\mathrm{RB}$.

### Asset EVC information (`asset EVC [EVC_id]`)

### Input and output format

Contestant
Judge

$\mathrm{"asset\ EVC"}\quad i$

$\begin{aligned}& P^\mathrm{EVC}_\mathrm{in} & & P^\mathrm{EVC}_\mathrm{out} & & C^\mathrm{EVC}_\mathrm{init} \\\end{aligned}$

### Details

- Return information of a product `i` of the EVC, $P^\mathrm{EVC}_{\mathrm{in}}$ is the maximum input power, $P^\mathrm{EVC}_{\mathrm{out}}$ is the maximum output power, $C^\mathrm{EVC}_{\mathrm{init}}$ is the initial cost per unit of an EVC.
- A valid EVC `i` is an integer ranging from 1 to $N_\mathrm{EVC}$.
- <font color="red">A product with $P^\mathrm{EVC}_\mathrm{in} = P^\mathrm{EVC}_\mathrm{out} = C^\mathrm{EVC}_\mathrm{init} = 0$ is listed in the EVC catalog. If you would not install an EVC equipment at a nanogrid, please select this product.</font>

### Asset vehicles information (`asset vehicle [v_id]`)

### Input and output format

Contestant
Judge

$\mathrm{"asset\ vehicle"}\quad i$

$\begin{aligned}& \mathrm{Cap}^V_\mathrm{ele} & & \mathrm{Cap}^V_\mathrm{pop} \\& P^V_{\mathrm{charge}} & & P^V_{\mathrm{discharge}} & & C^V_{\mathrm{init}} & & \Delta^V_{\mathrm{move}} \\\end{aligned}$

### Details

- Return information of a product `i` of the vehicles.
- In the first line, $\mathrm{Cap}^V_{\mathrm{ele}}$ is an EV charged capacity, $\mathrm{Cap}^V_{\mathrm{pop}}$ is order capacity.
- In the second line,、$P^V_\mathrm{charge}$ is the charging speed, $P^V_{\mathrm{discharge}}$ is the discharging speed, $C^V_{\mathrm{init}}$ is the cost per EV and $\Delta^V_{\mathrm{move}}$ is amount of energy needed per unit of movement.
- A valid `i` for asset vehicles information is an integer ranging from 1 to $N_\mathrm{V}$.

### Transportation request information (`order [day]`)

### Input and output format

Contestant
Judge

$\mathrm{"order"}\quad d$

$\begin{aligned}& o_1 & & \cdots & & o_{N_\mathrm{div}} \\\end{aligned}$

### Details

- Return information of the frequency of transportation requests on the `d`.
- $o_i$ is an expected value of transportation requests that occurs during the time interval $i$.

### Evacuation center information (`shelter`)

### Input and output format

Contestant
Judge

$\mathrm{"shelter"}$

$\begin{aligned}& N_\mathrm{shelter} \\& x^\mathrm{shelter}_1 & & p^\mathrm{shelter}_1 \\& \vdots \\& x^\mathrm{shelter}_{N_\mathrm{shelter}} & & p^\mathrm{shelter}_{N_\mathrm{shelter}} \\& D^\mathrm{shelter}_1 & & \cdots & & D^\mathrm{shelter}_{N_\mathrm{div}} \\\end{aligned}$

### Details

- Return information of shelter.
- In the first line, $N_\mathrm{shelter}$ is the number of shelters.
- In the following $N_\mathrm{shelter}$ lines, information of shelters' position and capacity are provided. $x_i$ and $p_i$ represent position of shelter $i$ and its capacity, respectively.
- The following one line shows a standard power demand generated at shelters when a disaster occurs. $D^\mathrm{shelter}_{i, j}$ represents the predicted energy demand at time interval $i$ for each shelter, can be derived by using the following equation (round down the calculated number):

```plain
$\begin{aligned}D^\mathrm{shelter}_{i, j} = p^\mathrm{shelter}_j D^\mathrm{shelter}_i / 100\end{aligned}$
```

- <font color="red">
When calculating the disaster response score, if the electricity demand area and the shelter are located at the same vertex, the energy demand at the relevant vertex is the sum of the energy demand from both the electricity demand area and the shelter.</font>

## Constraints for Input and Output

Of the following numbers, those described as **float** are given as floats, and the others are given as integers.

### Input and output format 1

- $40 \leq w_{\mathrm{day}, i} \leq 1000$
- $1000 \leq \alpha_\mathrm{cost} \leq 2000$
- $10000 \leq C_\mathrm{init} \leq 800000$
- <font color="red">$0 \leq C_\mathrm{total} \leq 1000000000$</font>
- $0 \leq w_\mathrm{trans} \leq 1$ [float]
- $0 \leq w_\mathrm{ele} \leq 1$ [float]
- $0 \leq w_\mathrm{env} \leq 1$ [float]
- $0 \leq w_\mathrm{acc} \leq 1$ [float]
- $15 \leq \alpha^\mathrm{trans}_\mathrm{fee} \leq 20$ [float]
- $0.005 \leq \alpha^\mathrm{trans}_\mathrm{penalty} \leq 0.2$ [float]
- $0.003 \leq \alpha^\mathrm{ele} \leq 0.015$ [float]
- $0.003 \leq \alpha^\mathrm{ele}_\mathrm{FE} \leq 0.01$ [float]
- $0.004 \leq \alpha^\mathrm{ele}_\mathrm{buy} \leq 0.02$ [float]
- $20 \leq \Delta^\mathrm{EV}_{\mathrm{move}, i} \leq 300$
- $0.00025 \leq \alpha^\mathrm{env}_\mathrm{fuel} \leq 0.0012$ [float]
- $0.0005 \leq \alpha^\mathrm{env}_\mathrm{buy} \leq 0.0025$ [float]
- $1000000 \leq \alpha^\mathrm{acc} \leq 8000000$
- $3000 \leq T_\mathrm{max} \leq 10000$
- $2700 \leq T_\mathrm{last} \leq 9000$
- $15 \leq N_\mathrm{div} \leq 30$
- $2 \leq N_\mathrm{day} \leq 16$
- <font color="red">$1 \leq N_\mathrm{acc} \leq 8$</font>
- $5000 \leq V \leq 20000$
- $5000 \leq E \leq 40000$
- $-60000 \leq x_i \leq 60000 (1 \leq i \leq V)$
- $-60000 \leq y_i \leq 60000 (1 \leq i \leq V)$
- $0 \leq p_i \leq 2000 (1 \leq i \leq V)$
- $1 \leq A_i \leq 5000 (1 \leq i \leq V)$
- $5 \leq l_i \leq 300 (1 \leq i \leq V)$
- $1 \leq u_i \leq V (1 \leq i \leq E)$
- $1 \leq v_i \leq V (1 \leq i \leq E)$
- $1 \leq d_i \leq 300 (1 \leq i \leq E)$
- $0 \leq N_\mathrm{demand} \leq 12$
- <font color="red">$10 \leq \sigma_D^2 \leq 30$</font>
- $0 \leq D^{\rm predict}_i \leq 200 (1 \leq i \leq N_\mathrm{div})$
- $0 \leq R^{\rm predict}_i \leq 10 (1 \leq i \leq N_\mathrm{div})$ [float]
- $2 \leq N_\mathrm{PV} \leq 3$
- $2 \leq N_\mathrm{FE} \leq 4$
- $2 \leq N_\mathrm{RB} \leq 3$
- $2 \leq N_\mathrm{EVC} \leq 5$
- $3 \leq N_V \leq 4$
- $10 \leq A^\mathrm{PV} \leq 15$
- $50 \leq C^\mathrm{PV}_{\mathrm{init}} \leq 120$
- <font color="red">$0 \leq P^\mathrm{FE}_\mathrm{max} \leq 500$</font>
- $0 \leq C^\mathrm{FE}_\mathrm{init} \leq 4000$
- $8000 \leq \mathrm{Cap}^\mathrm{RB} \leq 100000$
- $250 \leq C^\mathrm{RB}_\mathrm{init} \leq 1000$
- <font color="red">$0 \leq P^\mathrm{EVC}_\mathrm{in} \leq 500$</font>
- <font color="red">$0 \leq P^\mathrm{EVC}_\mathrm{out} \leq 500$</font>
- <font color="red">$0 \leq C^\mathrm{EVC}_\mathrm{init} \leq 2000$</font>
- $40000 \leq \mathrm{Cap}^V_\mathrm{ele} \leq 900000$
- $2 \leq \mathrm{Cap}^V_\mathrm{pop} \leq 50$
- $300 \leq P^V_{\mathrm{charge}} \leq 1200$
- $300 \leq P^V_{\mathrm{discharge}} \leq 1200$
- $1500 \leq C^V_{\mathrm{init}} \leq 8000$
- $20 \leq \Delta^V_{\mathrm{move}} \leq 300$
- $0 \leq o_i \leq 1000 (1 \leq i \leq N_\mathrm{div})$
- $4 \leq N_\mathrm{shelter} \leq 16$
- $1 \leq x^\mathrm{shelter}_i \leq V (1 \leq i \leq N_\mathrm{shelter})$
- $20 \leq p^\mathrm{shelter}_i \leq 800 (1 \leq i \leq N_\mathrm{shelter})$
- $0 \leq D^\mathrm{shelter}_i \leq 12 (1 \leq i \leq N_\mathrm{div})$

### Input and output format 2

- $S_\mathrm{trans}$ [float]
- $S_\mathrm{ele}$ [float]
- $S_\mathrm{env}$ [float]
- $1 \leq x^\mathrm{grid}_\mathrm{pos} \leq V$
- $0 \leq \mathrm{Chg}^\mathrm{grid}_\mathrm{init} \leq \mathrm{Cap}^\mathrm{RB} A^\mathrm{grid}_\mathrm{RB}$
- -   - $\mathrm{Cap}^\mathrm{RB}$ is the battery capacity of the installed RB and $A^\mathrm{grid}_\mathrm{RB}$ represents amount of the RB product to be installed.

- $1 \leq \mathrm{type}^\mathrm{grid}_\mathrm{PV} \leq N_\mathrm{PV}$
- <font color="red"> $0 \leq A^\mathrm{grid}_\mathrm{PV} \leq 500$ </font>
- $1 \leq \mathrm{type}^\mathrm{grid}_\mathrm{FE} \leq N_\mathrm{FE}$
- $1 \leq \mathrm{type}^\mathrm{grid}_\mathrm{RB} \leq N_\mathrm{RB}$
- <font color="red"> $0 \leq A^\mathrm{grid}_\mathrm{RB} \leq 10000$ </font>
- $1 \leq \mathrm{type}^\mathrm{grid}_\mathrm{EVC} \leq N_\mathrm{EVC}$
- $1 \leq x^\mathrm{EV}_\mathrm{pos} \leq V$
- $1 \leq \mathrm{Chg}^\mathrm{EV}_\mathrm{init} \leq \mathrm{Cap}^V_\mathrm{ele}$
- -   - $\mathrm{Cap}^V_\mathrm{ele}$ is an installed EV charged capacity.

- $1 \leq \mathrm{type}_\mathrm{EV} \leq N_\mathrm{V}$

## Sample Code A

A software toolkit for scoring and testing on a local contestant environment is provided through the following [link](https://img.atcoder.jp/hokudai-hitachi2021/toolkit_A.zip). Sample code for beginners is also available.

- Test case
- Judge program
- Sample code