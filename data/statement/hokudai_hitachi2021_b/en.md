Contents
    

- [Problem summary](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#problem-summary)
    -   - [Input and output format 1](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#input-and-output-format-1)
-   - [Input and output format 2](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#input-and-output-format-2)
-   - -   -   - [$\mathrm{grid\_info}$ details](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#mathrmgrid_info-details)
-   -   - [$\mathrm{EV\_info}$ details](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#mathrmev_info-details)

-   - [Input and output format 3](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#input-and-output-format-3)
- [Problem details](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#problem-details)
    -   - [Map information](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#map-information)
-   - [Asset information](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#asset-information)
-   - [Energy demand](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#energy-demand)
-   - [Energy supply](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#energy-supply)
-   - [Energy balance in detail](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#energy-balance-in-detail)
-   - [Work](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#work)
-   - [Transportation request](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#transportation-request)
-   - [Vehicles](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#vehicles)
-   - [Scoring](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#scoring)
-   - [Query details](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#query-details)
-   - [Constraints for Input and Output](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#Constraints-for-input-and-output)
- [Sample Code B](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#sample-code-B)

    

    

    
    
    

## Problem summary

A project to stably supply electricity from renewable sources to a region with distributed small power grids (nanogrids) has been launched aiming to achieve a low-carbon society. The supplied electricity will be used not only in the electricity demand areas, but also for transporting people and goods by electric vehicles (EVs).

In this problem (Problem B), you will take on the role of an area designer of the project. You will design a layout of nanogrids which can provide stable energy supply and smooth transportation services. In addition to the area design, in Problem B, you will also manage an optimization of EV routing for transportation requests and work schedule (a daily operation). If the designed layout allows an operation with a low environmental load and energy can be supplied smoothly even during a wide-area power outage, additional points will be obtained.

![](https://img.atcoder.jp/hokudai-hitachi2021/ProblemB_fig1_en.png)

Fig.1 A flow of Problem B. Illustration shows overview and answer items Problem B.

<br>

![](https://img.atcoder.jp/hokudai-hitachi2021/ProblemB_fig2_en.png)

Fig.2 Example of a design with specified budget limit of 66 million yen. In addition to designing equipment installation in each nanogrid, position of nanogrids, initial position and initial storage amount of each EV are also designed and submitted elsewhere.

<br>

![](https://img.atcoder.jp/hokudai-hitachi2021/ProblemB_fig3_en.png)

Fig.3 Comparison between problem A and B.

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
- `end` is required to terminate your query at the end of your output. The judge moves to the next operation by reading `end`. If `end` is not provided, undefined behavior will occur.
- An example of valid $\mathrm{query}$ is as follows. In case of invalid $\mathrm{query}$, `WA` (wrong answer) is returned.
-   - `budget`
-   - `temporal`
-   - `score`
-   - `graph`
-   - `demand`
-   - `demand [day] [id]`
-   - `radiation [day] [id]`
-   - `asset`
-   - `asset PV [id]`
-   - `asset FE [id]`
-   - `asset RB [id]`
-   - `asset EVC [id]`
-   - `asset vehicle [id]`
-   - `order [day]`
-   - `shelter`
-   - `work`
-   - `work [day] [id]`
-   - `end`
- The output information corresponding to each $\mathrm{query}$ is described in [Query details](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#query-details).

## Input and output format 2

After input and output format 1, the contestant will output the nanogrid and EV facility layout in the following format.

First, the contestant will output the number of nanogrids to be installed, $N_\mathrm {grid}$.

```plain
$\begin{aligned}N_\mathrm{grid}\end{aligned}$
```

Next, the information of each nanogrid is outputted in the following format.

```plain
$\begin{aligned}& \mathrm{grid\_info}_1 \\& \vdots \\& \mathrm{grid\_info}_{N_\mathrm{grid}} \\\end{aligned}$
```

- The information of each nanogrid is outputted as $\mathrm{grid\_info}$ for $N_\mathrm{grid}$ lines. The details of $\mathrm{grid\_info}$ will be described later.
- The electricity demand of nanogrids installed outside the preset electricity demand areas is always $0$.
- For each nanogrid, if the land area required for PV installation exceeds the area for which PV installation is possible at each vertex ($A_i$ in `graph`), it is `WA`.
- If you try to install the nanogrid multiple times at the same vertex, the last installation will be effective.
- <font color="red">IDs are assigned to the nanogrid by using the following rule, and each nanogrid will be referred to by this ID thereafter. Note that this ID is different from the ID of the electricity demand area.<br>
Rule for assigning nanogrid ID: If there is a nanogrid installed in the power demand area, the IDs are assigned in the order of the power demand area ID. After that, IDs are assigned to the remaining nanogrids in the order of installation. If there is no nanogrids installed in the power demand area, IDs are assigned in the order of installation.</font>

Next, the contestant will output the number of EVs, $N_\mathrm{EV}$.

```plain
$\begin{aligned}N_\mathrm{EV}\end{aligned}$
```

Next, the information of each EV is outputted in the following format.

```plain
$\begin{aligned}& \mathrm{EV\_info}_1 \\& \vdots \\& \mathrm{EV\_info}_{N_\mathrm{EV}}\end{aligned}$
```

- The information of each EV is outputted as $\mathrm{EV\_info}$ for $N_\mathrm{EV}$ lines. The details of $\mathrm{EV\_info}$ will be described later.
- IDs are assigned to EVs in the order of installation, and each EV will be referred to by this ID thereafter.

At the end, the contestant will output the following specified command format.

```plain
$\begin{aligned}\mathrm{command} & & \mathrm{day}\end{aligned}$
```

- The first argument is a character string that specifies the execution form either `test` or `submit`. The valid strings are as follows.
- `test`: Executes the test of the date specified by the second argument, $\mathrm{day}$, with the specified nanogrid and EV layout that the contestant has outputted. In this case, the contestant then performs a daily operation via input and output format 3. In the end of the daily operation, the score of that day is returned to a standard input. For details, please refer to [Input and output format 3](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#input-and-output-format-3).
- `submit`: Submits the specified nanogrid and EV layout as an answer. With this `submit` command, the $\mathrm{day}$ is ignored. In this case, the contestant then performs daily operations via input and output format 3. After the daily operations, the disaster response test gets started. For details, please refer to [Input and output format 3](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#input-and-output-format-3).
- The second argument specifies the date to run the test. The valid date ranges from day 1 to day $N_\mathrm{day}$. Otherwise, it is `WA`.

### $\mathrm{grid\_info}$ details

### Input and output format

```plain
$\begin{aligned}& x^\mathrm{grid}_\mathrm{pos} & & \mathrm{Chg}^\mathrm{grid}_\mathrm{init} \\& \mathrm{type}^\mathrm{grid}_\mathrm{PV} & & A^\mathrm{grid}_\mathrm{PV} \\& \mathrm{type}^\mathrm{grid}_\mathrm{FE} \\& \mathrm{type}^\mathrm{grid}_\mathrm{RB} & & A^\mathrm{grid}_\mathrm{RB} \\& \mathrm{type}^\mathrm{grid}_\mathrm{EVC}\end{aligned}$
```

### Details

- In the first line, $x^\mathrm{grid}_\mathrm{pos}$ and $\mathrm{Chg}^\mathrm{grid}_\mathrm{init}$ represent the position and the initial storage amount of a nanogrid.
- The following 4 lines specify the type (PV, FE, RB and EVC) and amount of facilities to be installed at the nanogrid. Only one type of PV, FE, RB, and EVC product can be installed.
- The following line represents the configuration of PV equipment. $\mathrm{type}^\mathrm{grid}_\mathrm{PV}$ represents the type of PV product and $A^\mathrm{grid}_\mathrm{PV}$ represents the amount of the PV product to be installed in terms of power generation capacity.
- The following line represents the configuration of FE equipment. $\mathrm{type}^\mathrm{grid}_\mathrm{FE}$ represents the type of FE product.
- The following line represents the configuration of RB equipment. $\mathrm{type}^\mathrm{grid}_\mathrm{RB}$ represents the type of RB product and $A^\mathrm{grid}_\mathrm{RB}$ represents the amount of the RB product to be installed.
- The following line represents the configuration of EVC equipment. $\mathrm{type}^\mathrm{grid}_\mathrm{EVC}$ represents the type of EVC product.
- For PV installation, the following constraints must be met:
<p>$A^\mathrm{PV} A^\mathrm{grid}_\mathrm{PV} \leq A_{x^\mathrm{grid}_\mathrm{pos}}$</p>
where, $A^\mathrm{PV}$ is the required area per PV power generation capacity, $A^\mathrm{grid}_\mathrm{PV}$ is amount of the PV product to be installed and $A_{x^\mathrm{grid}_\mathrm{pos}}$ is the area where PV can be introduced at the vertex where the nanogrid is to be installed.

### $\mathrm{EV\_info}$ details

### Input and output format

```plain
$\begin{aligned}& x^\mathrm{EV}_\mathrm{pos} & & \mathrm{Chg}^\mathrm{EV}_\mathrm{init} & & \mathrm{type}_\mathrm{EV}\end{aligned}$
```

### Details

- At $t = 0$, EV position is set to $x^\mathrm{EV}_\mathrm{pos}$, initial EV charged amount is set to $\mathrm{Chg}^\mathrm{EV}_\mathrm{init}$, and the product type of EV is $\mathrm{type}_\mathrm{EV}$.
- The vertex $x^\mathrm{EV}_\mathrm{pos}$ must be a vertex where a nanogrid is installed.

## Input and Ouput format 3

After outputting the placement of the nanogrid and EV, the contestant will test the placement by controlling the EV, FE power generation, acceptance/rejection of transportation orders, and work equipment.

At each time $t$, the contestant first receives the EV, nanogrid, and work machine status $\mathrm{info}_t$ at that time. The format of $\mathrm{info}_t$ is as follows.

> $\begin{aligned}& \mathrm{Chg}^\mathrm{grid}_1 & & \mathrm{pw}^\mathrm{actual}_1 & & \mathrm{pw}^\mathrm{excess}_1 & & \mathrm{pw}^\mathrm{FE}_1 & & \mathrm{pw}^\mathrm{buy}_1 \\& \vdots \\& \mathrm{Chg}^\mathrm{grid}_{N_\mathrm{grid}} & & \mathrm{pw}^\mathrm{actual}_{N_\mathrm{grid}} & & \mathrm{pw}^\mathrm{excess}_{N_\mathrm{grid}} & & \mathrm{pw}^\mathrm{FE}_{N_\mathrm{grid}} & & \mathrm{pw}^\mathrm{buy}_{N_\mathrm{grid}} \\& \mathrm{Chg}^\mathrm{EV}_1 & & u_1 & & v_1 & & \mathrm{dist}_1 & & N^\mathrm{order}_1 & & o_{i, 1} & & \cdots & & o_{i, N^\mathrm{order}_1} \\& \vdots \\& \mathrm{Chg}^\mathrm{EV}_{N_\mathrm{EV}} & & u_{N_\mathrm{EV}} & & v_{N_\mathrm{EV}} & & \mathrm{dist}_{N_\mathrm{EV}} & & N^\mathrm{order}_{N_\mathrm{EV}} & & o_{i, {N_\mathrm{EV}}} & & \cdots & & o_{i, N^\mathrm{order}_{N_\mathrm{EV}}} \\& \mathrm{Chg}^\mathrm{work}_1 & & x^\mathrm{work}_1 & & W^\mathrm{work}_1 & & w^\mathrm{work}_1 \\& \vdots \\& \mathrm{Chg}^\mathrm{work}_{N_\mathrm{work}} & & x^\mathrm{work}_{N_\mathrm{work}} & & W^\mathrm{work}_{N_\mathrm{work}} & & w^\mathrm{work}_{N_\mathrm{work}} \\& N_\mathrm{order} \\& \mathrm{id}_1 & & w_1 & & z_1 & & \mathrm{state}_1 & & \mathrm{time}_1 \\& \vdots \\& \mathrm{id}_{N_\mathrm{order}} & & w_{N_\mathrm{order}} & & z_{N_\mathrm{order}} & & \mathrm{state}_{N_\mathrm{order}} & & \mathrm{time}_{N_\mathrm{order}} \\\end{aligned}$

- The first $N_\mathrm{grid}$ line provides information about the power supply and demand of the nanogrid. In line $i$, the amount of electricity stored in the nanogrid with ID $i$ is given by $\mathrm{Chg}^\mathrm{grid}_i$, and the power balance at the previous time is given by $\mathrm{pw}^\mathrm{actual}_i$, <font color="red">The amount of excess power generation</font> is given by $\mathrm{pw}^\mathrm{excess}_i$, fuel engine power generation amount is given by $\mathrm{pw}^\mathrm{FE}_i$, and the amount of power purchased from the grid is given by $\mathrm{pw}^\mathrm{buy}_i$. However when $t = 0$ it is given by $\mathrm{pw}^\mathrm{actual}_i = \mathrm{pw}^\mathrm{excess}_i = \mathrm{pw}^\mathrm{FE}_i = \mathrm{pw}^\mathrm{buy}_i = 0$.
- The following $N_\mathrm{EV}$ line describes the the status of EV. The line $i$ of the $N_\mathrm{EV}$ line represents the state of the EV whose ID is $i$. $\mathrm{Chg}^\mathrm{EV}_i$ is the amount of electricity stored. The coordinates located in the graph $(u_i, v_i, \mathrm{dist}_1)$ represent order location, $N^\mathrm{order}_i$ is the orders in transit and $o_{i, 1}, \cdots, o_{i, N^\mathrm{order}_i}$ reperesents the number of orders in transit.
- The following $N_\mathrm{work}$ line represents the status of the work order. The line $i$ of the <font color="red">$N_\mathrm{work}$</font> line represnts the status of work demand whose ID is $i$. $\mathrm{Chg}^\mathrm{work}_i$ is the amount of electricity stored in the corresponding work machine, $x^\mathrm{work}_i$ is the work demand occuring at the vertex, $W^\mathrm{work}_i$ is the cumulative total amount of work performed so far and $w^\mathrm{work}_i$ represnts the current continued work time.
- The following line $1$ gives the information of $N_\mathrm{order}$ which is the number of unprocessed transportation orders. Unprocessed means that the order has not been rejected or canceled and has not been shipped.
- The following $N_\mathrm{order}$ line give the information about the unprocessed transport orders. The line $i$ of the $N_\mathrm{order}$ line gives the information about the number of orders that took place in $i$ during the unprocessed orders, $\mathrm{id}$ is the ID, $w_i$ is the departure point, $z_i$ is the destination point, $\mathrm{state}_i$ is the status and $\mathrm{time}_i$ is the time interval. See [Transportation Request](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#transportation-request) for details on the status.

After receiving the $\mathrm{info}_t$, the constestant can give an any number of commands. The command follows the following format.

> $\begin{aligned}& \mathrm{group} & & \mathrm{id} & & \mathrm{command}\end{aligned}$

- The $\mathrm{group}$ must be one of the following: `EV`、`FE`、`Machinery` or `Order`. If a character string other than these is issued as $\mathrm{group}$, it is WA.
- `EV` means EV, `FE` means the fuel engine generator installed in each nanogrid, `Machinery` means to operate the work machine in each work demand area, and `Order` indicates the reponse to the order which has been made.
- $\mathrm{id}$ represents the target to actually operate or respond to in each group. $\mathrm{group}$ is the ID of `EV` if it is `EV`, $\mathrm{group}$ is the ID of nanogrid if it is `FE`, $\mathrm{group}$ is the ID of work demand areas if it is `Machinery`, If $\mathrm{group}$ is `Order` then specify the ID. If you specify an ID that is not valid for each group, it is `WA`.
- $\mathrm{command}$ represents an operation or response to the target specified by $\mathrm{group}$ and $\mathrm{id}$. For specific details of the $\mathrm{command}$ , refer to [Vehicles](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#vehicles) when group is `EV`, [Energy supply](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#energy-supply) when group is `FE`, [Work](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#work) when group is `Machinery`, and [Transportation request](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#transportation-request) when group is `Order`. If an invalid command is issued in each group then it becomes `WA`.
- Of the commands issued above, if the command is issued multiple times for the same $\mathrm{group}$ and $\mathrm{id}$, the last issued command is used, If an invalid command is issued multiple times then it is `WA`.
After issuing the command at time $t$, the Contestant outputs the following contents to notify the judge the end of command issue.

> $\begin{aligned}\mathrm{"end"}\end{aligned}$

- You can issue `end` directly as a string.
- Behavior is undefined if `end` is not issued.

This completes the control at time $t$. The contestant completes the test for day 1 by performing the above operations $T_\mathrm{max}$ times. After that, in the case of command `test` ([Input and output format 2](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#input-and-output-format-2)) is executed, the score of that day is returned as follows:

$S_\mathrm{trans}\quad S_\mathrm{ele}\quad S_\mathrm{env} \quad S_\mathrm{work}$

The contestant must read the returned score otherwise it is `WA`. It is noted that the execution time is set by the judge's CPU time.
In the case of command `submit` ([Input and output format 2](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#input-and-output-format-2)) is executed, after the contestant completes $N_\mathrm{day}$ days of the above operations, a disaster response test will be conducted. The disaster response test gets started by randomly selecting a day from 1 to $N_\mathrm{day}$.

## Problem details

## Map information

Map information is given as a simple undirected graph with a set of vertices and a set of edges. The graph represents a road network on which the movement and charge/discharge of electric vehicles (EV) occur. Each vertex is placed on a two-dimensional plane, and the population and the installed capacity of solar power generation facilities are specified. The higher the population, the higher the probability of transportation requests occuring. In addition, either energy demand or work demand is set for some of the vertices.

## Asset information

One nanogrid consists of photovoltaics (PV), a private generator equipped with fuel engines (FE), a storage rechargeable battery (RB), and an EV charge/discharge device or EV charger (EVC). When installing the nanogrid, it is also necessary to specify the configuration for these facilities.

The features of each facility are as follows:

- PV: The power generated by the PV is proportional to the amount of solar radiation which is given for each vertex at each time interval. Once a PV is installed, no additional cost is required. However, if you try to install more than the installed capacity of each vertex, it will be defined as `WA` (wrong answer). Therefore, the following constraints must be fulfilled for PV installation.
<p>$A^\mathrm{PV} A^\mathrm{grid}_\mathrm{PV} \leq A_i$</p>
where, $A^\mathrm{PV}$ is the required area per PV power generation capacity, which is the installation specification, $A^\mathrm{grid}_\mathrm{PV}$ is amount of the PV product to be installed and $A_i$ is the area for which PV installation is possible at the vertices where the nanogrid is to be installed.
- FE:  The power is generated by consuming fuel. **The amount of power generated by FE is controlled by specifying the output for each step. The specified power must be greater than or equal to the minimum output, less than or equal to the maximum output, or 0. Otherwise, it is `WA` (wrong answer). For your information, efficiency of power generation by FE is maximum when it is operated at its maximum output power.** Installation costs per output power are cheap and weather-independent power generation is possible. However, additional fuel costs are required for power generation.
- RB: The rechargeable batteries are charged when power excess occurs and are discharged when power shortage occurs. At the time of simulation, the initial storage amount at the beginning of the day can be specified arbitrarily.
- EVC: It connects PV, FE and  RB, and shares load among each other, it also inputs and outputs power between a nanogrid and external devices such as electric vehicles.

If the amount of power generated by these facilities and the charge/discharge amount by EV are insufficient to power load and a power shortage occurs, then the power will be compensated by purchasing from an existing electric system (electricity from the grid).

For selection of EVs, an EV catalog will be provided.For more details refer [Asset vehicles information(asset vehicle [v_id])](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#asset-vehicle-info)

The initial costs of all above facilities and EVs are required. The initial cost (budget limit) can be obtained in the section titled "Input and output format 1". If the initial cost of your designed system exceeds the standard amount, the score will be penalized.

## Energy demand

Electricity demand is set for some of the vertices in the area. The location and the predicted energy demand can be obtained at the start of the test case.

## Energy supply

The energy supply is preferentially covered by PV, and the difference between EV charge/discharge, work machine charge/discharge and energy demand is aggregated in RB. The FE operates when energy supply from PV is insufficient and power shortage occurs. If a power shortage exceeds the maximum output of the FE, the power will be covered by purchasing from a normal electric system (electricity from the grid).

- **Amount of PV power generation**: The amount of PV power generation is given by the product of the amount of solar radiation and the installed PV capacity in the time interval. Please see details in [Input and output format 2](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#input-and-output-format-2)
- **Amount of FE power generation**: **The amount of power generated by FE is controlled by specifying the output for each step. The specified power must be greater than or equal to the minimum output, less than or equal to the maximum output, or 0. Otherwise, it is `WA` (wrong answer). For your information, efficiency of power generation by FE is maximum when it is operated at its maximum output power.**
- **RB charge amount**: RB works to compensate for short-term energy supply and demand imbalances. At each time, the difference between the sum of the PV power generation amount, EV charge/discharge amount and **work machine charge/discharge amount**, and the power demand is aggregated into the RB storage amount. In other words, if the sum of the PV power generation amount and the charge amount from the EV to the nanogrid exceeds the sum of the power demand and the charge amount from the nanogrid to the EV, the RB storage amount increases, and vice versa. **In case, if the energy supply is excessive, the amount of PV power generation will be suppressed. &lt;font color="red"&gt;&lt;del&gt;If the amount of PV power generation is 0 and energy supply is still excessive, it is `WA`.&lt;/del&gt;&lt;/font&gt;**

To control the output of power generated by FE, the contestant needs to output the command below in [Input and output format 3](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#input-and-output-format-3)

```plain
$\begin{aligned}\mathrm{"FE"} & & \mathrm{id} & & d\end{aligned}$
```

- The $\mathrm{id}$ is a vertex number where a nanogrid is installed. The valid $\mathrm{id}$ are vertex numbers specified in "Input and output format 2" ($x^\mathrm{grid}_\mathrm{pos}$). If other values are specified, it is `WA`.
- $d$ is the amount of power generated by FE per step. Valid values must be integer values greater than or equal to the minimum output and less than or equal to the maximum output of the FE installed in the relevant nanogrid, or 0.
- If the output of power generated by FE is not controlled, FE will not generate any power.

## Energy balance in detail

The energy supply and energy demand for each nanogrid, electricity demand area, and work demand area can be summarized as follows.

- Step 1: Calculate temporary energy balance $\Delta_\mathrm{tmp}$.
<p>$\Delta_\mathrm{tmp, t} = \Delta_\mathrm{PV, t}^\mathrm{actual} - \Delta_\mathrm{demand, t}^\mathrm{actual} + \Delta^\mathrm{EV}_{\mathrm{discharge}, t} - \Delta^\mathrm{EV}_{\mathrm{charge}, t} + \Delta^\mathrm{work}_{\mathrm{discharge}, t} - \Delta^\mathrm{work}_{\mathrm{charge}, t} \textcolor{red}{+ \Delta^\mathrm{FE}_{t}}$</p>
Here, each variable is as follows:
-   - $\Delta_\mathrm{PV, t}^\mathrm{actual}$ : The amount of PV power generation at the relevant point at time $t$. PV power generation is always zero at points other than the nanogrid.
-   - $\Delta_\mathrm{demand, t}^\mathrm{actual}$ : The amount of energy demand at the relevant point at time $t$. The amount of energy demand is always 0 at points other than the electricity demand areas.
-   - $\Delta^\mathrm{EV}_{\mathrm{discharge}, t}$ : The total EV discharge amount at the relevant point at time $t$.
-   - $\Delta^\mathrm{EV}_{\mathrm{charge}, t}$ : The total EV charge amount at the relevant point at time $t$.
-   - $\Delta^\mathrm{work}_{\mathrm{discharge}, t}$ : The total work machine discharge amount at the relevant point at time $t$.
-   - $\Delta^\mathrm{work}_{\mathrm{charge}, t}$ : The total work machine charge amount at the relevant point at time $t$.
-   - &lt;font color="red"&gt;$\Delta^\mathrm{FE}_{t}$ :&lt;/font&gt;&lt;font color="red"&gt;The amount of FE power generation at the relevant point at time $t$.&lt;/font&gt;
-   - If the following constraints are not fulfilled, it will be `WA` at that point.
&lt;p&gt;$\left\{
\begin{aligned}
&amp;amp; \Delta^\mathrm{EV}_{\mathrm{discharge}, t} + \Delta^\mathrm{work}_{\mathrm{discharge}, t} \leq P^\mathrm{EVC}_\mathrm{in} \textcolor{red}{\text{(}\Delta^\mathrm{FE}_{t} \text{is deleted)}} \\
&amp;amp; \Delta^\mathrm{EV}_{\mathrm{charge}, t} + \Delta^\mathrm{work}_{\mathrm{charge}, t} \leq P^\mathrm{EVC}_\mathrm{out}
\end{aligned}\right.$&lt;/p&gt;
-   -   - Here, $P^\mathrm{EVC}_\mathrm{in}$ and $P^\mathrm{EVC}_\mathrm{out}$ refers to the value of EVC installed at the relevant point. At points without nanogrid installation, these values are always zero.
- Step 2-a: Process when the amount of power generation is excessive. In case of,
$\Delta_\mathrm{tmp, t} &gt; \min\{P^\mathrm{RB}_{\mathrm{charge}}, \mathrm{Cap}^\mathrm{RB}_\mathrm{total} - \mathrm{Chg}^\mathrm{grid}_t\}$ , it will be as follows:
$\Delta_\mathrm{total, t} = \min\{P^\mathrm{RB}_{\mathrm{charge}}, \mathrm{Cap}^\mathrm{RB}_\mathrm{total} - \mathrm{Chg}^\mathrm{grid}_t\}, \quad \mathrm{pw}^\mathrm{excess}_t = \Delta_\mathrm{tmp, t} - \Delta_\mathrm{total, t}, \quad \mathrm{pw}^\mathrm{buy}_t = 0.$
Here, each variable is as follows:
-   - $P^\mathrm{RB}_{\mathrm{charge}}$ : The installed RB value for the maximum battery charging speed at the relevant point. Battery charging speed is always zero at points other than the nanogrid.
-   - $\mathrm{Cap}^\mathrm{RB}_\mathrm{total}$ : The battery storage capacity at the relevant point, where battery storage capacity is the product of the capacity per unit of the installed RB value and the installed amount. Battery storage capacity is always zero at points other than the nanogrid.
-   - $\mathrm{Chg}^\mathrm{grid}_t$ : The amount of battery charge at the relevant point at time $t$. Battery storage is always zero at points other than the nanogrid.
-   - $\mathrm{pw}^\mathrm{excess}_t$ : The amount of excess power generation at the relevant point at time $t$. &lt;font color="red"&gt;&lt;del&gt;If $\Delta_\mathrm{PV, t}^\mathrm{actual} &amp;lt; \mathrm{pw}^\mathrm{excess}_t$ then it is `WA`. This expresses that the response by suppressing PV output cannot catch up.&lt;/del&gt;&lt;/font&gt;
-   - $\mathrm{pw}^\mathrm{buy}_t$ : The amount of power that needs to be purchased from the grid at the relevant point at time $t$.
- Step 2-b: Process when the amount of power generation is insufficient.
$\Delta_\mathrm{tmp, t} &lt; -\min\{P^\mathrm{RB}_{\mathrm{discharge}}, \mathrm{Chg}^\mathrm{grid}_t\}$
with the above condition. It will be as follows:
<br>
$\Delta_\mathrm{total, t} = -\min\{P^\mathrm{RB}_{\mathrm{discharge}}, \mathrm{Chg}^\mathrm{grid}_t\}, \quad \mathrm{pw}^\mathrm{excess}_t = 0, \quad \mathrm{pw}^\mathrm{buy}_t = \Delta_\mathrm{total, t} - \Delta_\mathrm{tmp, t}.$
<br>
where,
<br>
-   - $P^\mathrm{RB}_{\mathrm{discharge}}$ : The installed RB value for the maximum battery discharge rate at the relevant point. Battery discharge rate is always zero at points other than the nanogrid.
- Step 2-c: Process when the amount of power generation is moderate.
If the conditions in Steps 2-a and 2-b are not fulfilled, do the following:
<br>
$\Delta_\mathrm{total, t} = \Delta_\mathrm{tmp, t}, \quad \mathrm{pw}^\mathrm{excess}_t = 0, \quad \mathrm{pw}^\mathrm{buy}_t = 0.$
- Step 3: Update the storage amount of a nanogrid
<br>
In the case of $\Delta_\mathrm{total, t} &lt; 0$,
<br>
$\mathrm{Chg}^\mathrm{grid}_{t + 1} = \Delta_\mathrm{total, t} + \mathrm{Chg}^\mathrm{grid}_t$
<br>
In the case of $\Delta_\mathrm{total, t} \geq 0$,
<br>
$\mathrm{Chg}^\mathrm{grid}_{t + 1} = \eta^\mathrm{RB}\Delta_\mathrm{total, t} + \mathrm{Chg}^\mathrm{grid}_t$
<br>
where,
-   - $\eta^\mathrm{RB}$ : Battery charging efficiency at the relevant point. It is considered as '1' at points without nanogrid installed.

## Work

There are points in the area that have work demand. The location of the work demand area and the predicted value of the work demand can be obtained at the start of the test case. Work demand is specified in the form of total work time and workable time zone within the day, and additional scores can be obtained by achieving it. Once the work is started, it needs to be continued for a certain period of time, and it is necessary to charge the power periodically in order to compensate the power consumed to work.
In order to control the work machine, it is necessary to issue a command as mentioned in [input and output format 3](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#input-and-output-format-3).

```plain
$\begin{aligned}\mathrm{"Machinery"} & & \mathrm{id} & & \left\{ \mathrm{"break"} \mid \mathrm{"work"} \mid \mathrm{"charge\_from"}\ d \mid \mathrm{"charge\_to"}\ d\right\}\end{aligned}$
```

- The $\mathrm{group}$ must be specified as `Machinery`.
- The id must be greater than 1 and less than $N_\mathrm{work}$.
- The valid commands and their contents are as follows
-   - `break`: Do not work
-   - `work`: Start the work. Once you start working, you need to continue working for more than the specified number of steps in the specified working time, otherwise it is `WA`.
-   - `charge_from d`: Charge the work machine by $d$. At this time, only $\Delta^\mathrm{work}_{\mathrm{charge}, t}$ is added to $d$, but the increment of $\mathrm{Chg}^\mathrm{work}$ is multiplied by $\eta^\mathrm{work}$.
-   - `charge_to d`: charge the work machine by $d$.

## Transportation request

Based on a transportation request, an EV picks up the order at a starting point and transports it to a destination. Transportation requests occur online, and each request has the following internal states. Here, all variables are integers.

- IDs are assigned to all orders in the order in which they occur. The order of ID allocation for orders that occur at the same time is not specified.
- Order ID $\mathrm{id}$: All orders are assigned with IDs in the order when they occur. The allocation of order ID for orders that occur at the same time is not specified.
- Order start position $p^\mathrm{order}$: A position (a vertex) at which an order occur, in other words, a position that an order will be picked up.
- Order destination position $d^\mathrm{order}$: A position (a vertex) at which an order will be delivered after it has been picked up. Upon arrival loading and unloading will be done automatically.
- Status $\mathrm{state}$: The status of the transportation order. $0$ indicates that it has not yet been picked up by any EV, and $1$ indicates that it has beed picked up but has not yet arrived at the destination.

The delivery request must be notified of acceptance or refusal within the $T_\mathrm{grace}$ step after it occurs. If not notified within the $T_\mathrm{grace}$ step, the order will be canceled and the delivery score will be penalized. In order to notify acceptance or rejection, it is necessary to issue a command of the following format as shown in [Input and output format 3](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#input-and-output-format-3).

```plain
$\begin{aligned}\mathrm{"Order"} & & \mathrm{id} & & \{ \mathrm{"accept"} | \mathrm{"reject"}\}\end{aligned}$
```

- $\mathrm{group}$ must specify the order
- A valid $\mathrm{id}$ is the ID of the transport request whose $\mathrm{state}$ is $0$ at the time when the command is issued. Refer to [Input and output format 3](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#input-and-output-format-3) for the input related to the transportation request information.
- A valid $\mathrm{command}$ is either `accept` or `reject`. accept means accepting the transportation request, and reject means rejecting the transportation request.
- If you try to pick up an unaccepted transportation request, it will be `WA`.

The internal $\mathrm{state}$ of the transportation request is as follows.

- $\mathrm{state} = -2$: The transportation request has been cancelled.
- $\mathrm{state} = -1$: The transportation request was rejected.
- $\mathrm{state} = 0$: The transportation request has occurred.
- $\mathrm{state} = 1$: The transportation request has been accepted.
- $\mathrm{state} = 2$: The transportation request is loaded on the EV.
- $\mathrm{state} = 3$: The transportation order arrived at the destination.

From the above, the transportation order with $\mathrm{state} = 0,1,2$ is treated as unprocessed, and the state is constantly notified at every hour. Orders with
$\mathrm{state} = -2, -1$ are notified only once during the next time when the order is in that state. For details please refer to [Input and output format 3](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#input-and-output-format-3).

## Vehicles

Contestant operates multiple EVs to adjust and transport power balance between nanogrids. Each vehicle has the following internal states.

- EV charged capacity  $\mathrm{Chg}^\mathrm{EV}(t)$
- EV position  $(u^V, v^V, d^V)$ :  an EV is on edge $(u^V, v^V)$, and the distance between its current position and vertex $u^V$ is $d^V$.

To operate EVs, the contestant needs to output the command below in [Input and output format 3](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#input-and-output-format-3)

```plain
$\begin{aligned}\mathrm{"EV"} & & \mathrm{id} & & \left\{ \mathrm{"stay"} \mid \mathrm{"move"} w \mid \mathrm{"pickup"}\ a \mid \mathrm{"charge\_from\_grid"}\ d \mid \mathrm{"charge\_to\_grid"} d \right\}\end{aligned}$
```

- The $\mathrm{group}$ must be specified as `Machinery`.
- The valid id is greater than 1 and less than $N_\mathrm{work}$.
- The valid commands and their contents are as follows
-   - `stay`: Let the EV stay in the same place. In this case, the EV does not consume electricity.
-   - `move w`:  Let the EV move with a unit of distance forward to the vertex `w`.
-   - `pickup a`:  The EV picks up the order ID `a`.
-   - `charge_from_grid d`:  Charge the EV from nanogrid at the EV position by the amount `d`.
-   - `charge_to_grid d`:  Charge nanogrid at the EV position from the EV by the amount `d`.
- Total amount of charge/discharge according to the above two items is aggregated and evaluated as $\Delta_\mathrm{EV}$ for each turn and each grid. For further information, please follow the link: [Energy balance details](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#energy_balance_details)

## Scoring

The final score ($S$) is defined using the following equation:

$S = \sum_{i = 1}^{N_\mathrm{day}}w_{\mathrm{day}, i}S_i + w_\mathrm{acc}S_\mathrm{acc} - \alpha_\mathrm{cost}\max(0, C_\mathrm{total} - C_\mathrm{init})$

where $S_i$ is the score of day i, $w_{\mathrm{day}, i}$ is the weighting factor for each $S_i$, $S_\mathrm{acc}$ is the disaster response score, $C_\mathrm{total}$ is the cost of the entire installed facilities and $\alpha_\mathrm{cost}$ is the coefficient for score conversion. The $S_i$ is defined using the following equation:

$S_i = w_\mathrm{trans}S_\mathrm{trans} + w_\mathrm{ele}S_\mathrm{ele} + w_\mathrm{env}S_\mathrm{env} + w_\mathrm{work}S_\mathrm{work}$

where $S_\mathrm{trans}$, $S_\mathrm{ele}$, $S_\mathrm{env}$, and $S_\mathrm{work}$ represent transport score, energy score, environmental score and work score, respectively. $w_\mathrm{trans}$, $w_\mathrm{ele}$, $w_\mathrm{env}$, and $w_\mathrm{work}$ are weighting factors for each score. Each score is determined by a test with the parameters of the corresponding day. For further details of each score, see the description below.

### Transportation score $S_\mathrm{trans}$

The transportation score $S_\mathrm{trans}$ is defined as

$S_\mathrm{trans} = \sum_{i \in \mathcal O^\mathrm{trans}} \max\left(0, \alpha^\mathrm{trans}_\mathrm{fee}\mathrm{dist}_i - \alpha^\mathrm{trans}_\mathrm{penalty}(T_{\mathrm{wait}, i} - T_i)^2\right) - \alpha^\mathrm{trans}_\mathrm{undelivered}N_\mathrm{undelivered} - \alpha^\mathrm{trans}_\mathrm{canceled}N_\mathrm{canceled}$

where$\mathcal O^\mathrm{trans}$ is a set of order IDs completed by the end of the test case, and $T_\mathrm{wait, i}$ is the time difference between order generated time of order ID $i$ and time that order ID $i$ is picked up. $\mathrm{dist}_i$ is the shortest path length from order start position to order destination position of order ID $i$. $\alpha^\mathrm{trans}_\mathrm{fee}$ is the parameter corresponding to the fare income, $\alpha^\mathrm{trans}_\mathrm{penalty}$ is a penalty for delayed response in transportation requests, $N_\mathrm{undelivered}$ is the total number of orders that is not delivered by $T_\mathrm{max}$,  and $N_\mathrm{canceled}$ is the total number of orders canceled without notice of acceptance or denial.

### Energy score $S_\mathrm{ele}$

The energy score $S_\mathrm{ele}$ is defined as

$S_\mathrm{ele} = \alpha^\mathrm{ele}C^\mathrm{balance} - \alpha^\mathrm{ele}_\mathrm{FE}\sum_{t = 0}^{T_\mathrm{max}}\sum_{i = 1}^{N_\mathrm{grid}}L^\mathrm{FE}_{i, t} - \alpha^\mathrm{ele}_\mathrm{buy}\sum_{t = 0}^{T_\mathrm{max}}\sum_{i = 1}^{N_\mathrm{grid}}L^\mathrm{buy}_{i, t}$

$C^\mathrm{balance} = \sum_{i = 1}^{N_\mathrm{EV}} C^{\mathrm{EV}_i}_{t = T_\mathrm{max}} + \sum_{i = 1}^{N_\mathrm{grid}} C^{\mathrm{grid}_i}_{t = T_\mathrm{max}} - \sum_{i = 1}^{N_\mathrm{grid}} C^{\mathrm{grid}_i}_{t = 0} - \sum_{i = 1}^{N_\mathrm{EV}} C^{\mathrm{EV}_i}_{t = 0} - \sum_{i = 1}^{N_\mathrm{EV}}\Delta^\mathrm{EV}_{\mathrm{move}, i}\mathrm{ret}_i$

Here, $C^\mathrm{balance}$ corresponds to the overall power balance, which is calculated as the sum of total amount of electricity stored in all EVs and all nanogrids at the time of $t = T_\mathrm{max}$ minus the sum of the total amount of initial electricity stored in all EVs and all nanogrids and the total amount of power required for the EVs to return to the initial EVs position. $L^\mathrm{FE}_{i, t}$ and $L^\mathrm{buy}_{i, t}$ are <font color="red">the amount of fuel used for FE power generation </font>at nanogrid $i$, at time $t$, and the power purchased from the grid by nanogrid $i$, respectively. $\alpha^\mathrm{ele}$, $\alpha^\mathrm{ele}_\mathrm{FE}$ and $\alpha^\mathrm{ele}_\mathrm{buy}$ are coefficients for energy score conversion.

If the nanogrid is not installed in the power demand area, all the power consumed in the power demand area where the nanogrid is not installed is treated as purchased from the grid.&lt;/

### Environmental score $S_\mathrm{env}$

The environmental score $S_\mathrm{env}$ is defined as

$S_\mathrm{env} = - \alpha^\mathrm{env}_\mathrm{fuel} \sum_{t = 0}^{T_\mathrm{max}} \sum_{i = 1}^{N_\mathrm{grid}} L^\mathrm{FE}_{i, t} - \alpha^\mathrm{env}_\mathrm{buy} \sum_{t = 0}^{T_\mathrm{max}} \sum_{i = 1}^{N_\mathrm{grid}} L^\mathrm{buy}_{i, t}$

where $\alpha^\mathrm{env}_\mathrm{fuel}$ and $\alpha^\mathrm{env}_\mathrm{grid}$ are coefficients for environmental score conversion.

### Disaster response score $S_\mathrm{acc}$

The disaster response score $S_\mathrm{acc}$ is defined as

$S_\mathrm{acc} = \alpha^\mathrm{acc}\mathrm{Day}$

Here $\mathrm{Day}$ is the number of continuous uninterruptible days for a disaster event with a maximum of $N_\mathrm{acc}$. $\alpha^\mathrm{acc}$ is a coefficient for disaster response score conversion. See below for details.

The disaster response score is calculated as follows.

1. A day in the test case is randomly selected, and the test starts from the initial storage amount specified by the contestant.
2.  A point of time in $\{1, \cdots , T^\mathrm{max}\}$ is randomly selected, and defined as the disaster starting time $t_\mathrm{acc}$. The amount of electricity stored at the time $t_\mathrm{acc}$ during the test executed in 1. is recorded.
3. A new test starts. The initial storage amount is equal to the storage amount recorded in 2. After that, the test is continued as long as the uninterruptible operation is performed without receiving the power supply from the grid and within the range of the above-mentioned maximum number of continuous uninterruptible days $N_\mathrm{acc}$. During this period, the final amount of electricity stored on the previous day is used as the initial amount of electricity stored on the subsequent days. The additional electricity demand areas will appear at the location of the evacuation centers. For details, refer to the evacuation center information (`shelter`) in [Input and output format 1](#input-and-output-format-1). Furthermore, no transport requests are generated during these tests.
4. The above disaster response test will be completed in up to $N_\mathrm{acc}$ days.

### Work score

The work score $S_\mathrm{work}$ is defined as

$S_\mathrm{work} = \alpha^\mathrm{work}\mathrm{Work}$

Here, $\mathrm{Work}$ is the number of work demand areas that have achieved work demand. $\alpha^\mathrm{work}$ is a coefficient for score conversion.

### <font color="red">Decision of final ranking</font>

<font color="red">In the system test, 400 test cases that differ from those during the contest period, are used, and the final ranking is determined by the total score of all testcases. The code of each Contestant, that is subject to the system test, is "the last submission code with AC status“. In addition, if there is a test case at which TLE or WA is obtained, the score for that test case will be 0 points. Please refer to the table below for a detailed breakdown of test cases. (Note that the generator will not be released.)</font>

![](https://img.atcoder.jp/hokudai-hitachi2021/sysstemtest_en2.png)

<font color="red">(1)4 types from published toolkits + 2 types from unpublished data</font><br>
<font color="red">(2)A total of 4 types of solar radiation contains of 1 type of large amount, 1 type of small amount and 2 types of random amount of the radiation.
</font><br>
<font color="red">(3)Expected sum of the number of transportation requests is one-to-one correspondence with map data.
</font><br>
<font color="red">(4)Test cases where the execution time and memory consumption are larger than those used for ranking during the contest period are excluded.</font><br>
<font color="red">(5)Map data 6 types $\times$ solar radiation 4 types $\times$ budget 3 types $\times$ other parameters 4 types = 288 test cases</font><br>
<font color="red">(6)Select to include the cases where specific assets or conditions are advantageous in consideration of future technology and policy.<br>**(For example, a test case with large penalty ($\alpha^\mathrm{ele}_\mathrm{buy}$ and $\alpha^\mathrm{env}_\mathrm{buy}$) for purchasing power from an existing grid. A test case with relatively small amount of either $w_\mathrm{acc}, w_\mathrm{trans}, w_\mathrm{ele}, w_\mathrm{env}$ or $w_\mathrm{work}$)**</font><br>

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

$T_\mathrm{max} \quad T_\mathrm{last} \quad N_\mathrm{div} \quad N_\mathrm{day} \quad N_\mathrm{acc} \quad T_\mathrm{grace}$

### Details

- $T_\mathrm{max}$ is a number of steps per day. $T_\mathrm{last}$ is the final time step in which transport requests can occur in a day.
- $T_\mathrm{max}$ is evenly divided into $N_\mathrm{div}$ intervals. Solar radiation information, energy demand information in detail, and transportation request information are constant in each of these time intervals.
- $N_\mathrm{day}$ shows how many days of data in a test case.
- $N_\mathrm{acc}$ shows how many days of data in a test case that is used for disaster response score calculation.
- $T_\mathrm{grace}$ is the grace period provided before the delivery order is canceled.

### Score related information (`score`)

### Input and output format

Contestant
Judge

$\mathrm{"score"}$

$\begin{aligned}& \alpha_\mathrm{cost} \\& w_{\mathrm{day}, 1} & & \cdots & & w_{\mathrm{day}, N_\mathrm{day}} \\& w_\mathrm{trans} & & w_\mathrm{ele} & & w_\mathrm{env} & & w_\mathrm{acc} & & w_\mathrm{work} \\& \alpha^\mathrm{trans}_\mathrm{fee} & & \alpha^\mathrm{trans}_\mathrm{penalty} & & \alpha^\mathrm{trans}_\mathrm{undelivered} & & \alpha^\mathrm{trans}_\mathrm{canceled} \\& \alpha^\mathrm{ele} & & \alpha^\mathrm{ele}_\mathrm{FE} & & \alpha^\mathrm{ele}_\mathrm{buy} \\& \alpha^\mathrm{env}_\mathrm{fuel} & & \alpha^\mathrm{env}_\mathrm{buy} & & \textcolor{red}{\text{(}\alpha^\mathrm{env}\text{ is deleted.)}} \\& \alpha^\mathrm{acc} \\& \alpha^\mathrm{work} \\\end{aligned}$

### Details

- The coefficients used for score calculation are listed in 8 lines. See [Scoring](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#scoring) for detailed formulas on how these coefficients are used.

### Graph related information (`graph`)

### Input and output format

Contestant
Judge

$\mathrm{"graph"}$

$\begin{aligned}& V & & E \\ & x_1 & & y_1 & & p_1 & & A_1 & & l_1 \\ & \vdots \\ & x_V & & y_V & & p_V & & A_V & & l_V \\ & u_1 & & v_1 & & d_1 \\ & \vdots \\ & u_E & & v_E & & d_E \\\end{aligned}$

### Details

- In the 1st line, the number of vertices $V$ and the number of edges $E$ of the graph are provided.
- In the following $V$ lines, information for each vertex is provided. The $i$-th line of the $V$ lines shows coordinates $(x_i, y_i)$ of vertex $i$, population $p_i$, acquirable land area $A_i$ and cost per acquisition area $l_i$. The $i$-th line corresponds to the vertex number $i$.
- In the following $E$ lines, information for each edge is provided. The $i$-th line of the $E$ lines shows vertex $u_i$, vertex $v_i$ and the distance $d_i$ between the two vertices.

### Energy demand information (`demand`)

### Input and output format

Contestant
Judge

$\mathrm{"demand"}$

$N_\mathrm{demand}$

### Details

- $N_\mathrm{demand}$ is the number of electricity demand areas.

### Energy demand information in details `demand [day] [id]`

### Input and output format

Contestant
Judge

$\mathrm{"demand"}\quad d \quad i$

$\begin{aligned}& x & & \sigma_D^2 \\& D^{\rm predict}_1 & & \cdots & & D^{\rm predict}_{N_{\rm div}} \\\end{aligned}$

### Details

- The information contains the predicted energy demand of a demand area specified by `i` on the day specified by `d`.
- In the 1st line, $x$ is the vertex number of the vertex where the electricity demand area exists. $\sigma_D^2$ is the variance of the error of the predicted energy demand at each step. In brief, the error of the predicted energy demand at each step follows a normal distribution with an average of $0$ and a variance of $\sigma_D^2$.
- In the 2nd line, the predicted energy demand for each time interval is provided. The $i$-th column of the $N_{\rm div}$ columns is represented by $D^\mathrm{predict}_i$, indicating the predicted energy demand at time interval $i$.

### Solar radiation information (`radiation [day] [id]`)

### Input and output format

Contestant
Judge

$\mathrm{"radiation"}\quad d \quad i$

$\begin{aligned}& R^{\rm predict}_1 & & \cdots & & R^{\rm predict}_{N_{\rm div}} \\\end{aligned}$

### Details

- Returns the predicted amount of solar radiation at the vertex `i` on the day `d`.
- $R^\mathrm{predict}_i$ represents predicted amount of solar radiation at time interval $i$. About accuracy of the predicted amount of solar radiation, The amount of cumulative daily radiation is generally accurate, but the accuracy at each step is not guaranteed.

### Asset information `asset`

### Input and output format

Contestant
Judge

$\mathrm{"asset"}$

$\begin{aligned}& N_\mathrm{PV} \\& N_\mathrm{FE} \\& N_\mathrm{RB} \\& N_\mathrm{EVC} \\& N_V \\\end{aligned}$

### Details

- In the 1st line, $N_\mathrm{PV}$ is the number of pieces of PV equipments.
- In the following line, $N_\mathrm{FE}$ is the number of pieces of FE equipments.
- In the following line, $N_\mathrm{RB}$ is the number of storage rechargeable batteries.
- In the following line, $N_\mathrm{EVC}$ is the number of EVCs.
- In the following line, $N_V$ is the number of vehicles.

### Asset PV information `asset PV [pv_id]`

### Input and output format

Contestant
Judge

$\mathrm{"asset\ PV"}\quad i$

$\begin{aligned}& A^\mathrm{PV} & & C^\mathrm{PV}_{\mathrm{init}} \\\end{aligned}$

### Details

- Return information of a product `i` of PV equipment. $A^\mathrm{PV}$ is power generation capacity per an area of a product and $C^\mathrm{PV}_\mathrm{init}$ is the cost per unit of power generation capacity.
- A valid PV `i` is an integer ranging from 1 to $N_\mathrm{PV}$.

### Asset FE information (`asset FE [fe_id]`)

### Input and output format

Contestant
Judge

$\mathrm{"asset\ FE"}\quad i$

$\begin{aligned} & P^\mathrm{FE}_\mathrm{min} & & P^\mathrm{FE}_\mathrm{max} & & \eta^\mathrm{FE}_\mathrm{min} & & \eta^\mathrm{FE}_\mathrm{max} & & C^\mathrm{FE}_\mathrm{init} & & C^\mathrm{FE}_\mathrm{fuel} \end{aligned}$

### Details

- Return information of a product `i` of FE equipment. $P^\mathrm{FE}_\mathrm{min}$ is the minimum output power on an operation, $P^\mathrm{FE}_\mathrm{max}$ is the maximum output power, $\eta^\mathrm{FE}_\mathrm{min}$ is the fuel consumption rate when the FE is operating with the minimum output power, $\eta^\mathrm{FE}_\mathrm{max}$ is the fuel consumption rate when the FE is operating with the maximum output power (The fuel consumption rate at each time $\eta^\mathrm{FE}_t$ depending on the output $t$, is derived by linear interpolation between $\eta^\mathrm{FE}_\mathrm{min}$ and $\eta^\mathrm{FE}_\mathrm{max}$), $C^\mathrm{FE}_\mathrm{init}$ is the initial for a FE equipment<font color="red"><del>, $C^\mathrm{FE}_\mathrm{fuel}$ is the fuel cost per unit of generating power</del></font>. <font color="red">(The fuel consumption is calculated as $\Delta^\mathrm{FE}_{t} \times ((\Delta^\mathrm{FE}_{t} - P^\mathrm{FE}_\mathrm{min}) \times (\eta^\mathrm{FE}_\mathrm{max} - \eta^\mathrm{FE}_\mathrm{min}) / (P^\mathrm{FE}_\mathrm{max} - P^\mathrm{FE}_\mathrm{min}) + \eta^\mathrm{FE}_\mathrm{min} ) / 1000$. The 1/1000 is a coefficient for unit conversion.)</font>
- A valid FE `i` is an integer ranging from 1 to $N_\mathrm{FE}$.
- A product with $P^\mathrm{FE}_\mathrm{min} = P^\mathrm{FE}_\mathrm{max} = \eta^\mathrm{FE}_\mathrm{min} = \eta^\mathrm{FE}_\mathrm{max} = C^\mathrm{FE}_\mathrm{init} = C^\mathrm{FE}_\mathrm{fuel} = 0$ is listed in the FE catalog. If you will not install a piece of FE equipment at a nanogrid, please select this product.

### Asset RB information (`asset RB [rb_id]`)

### Input and output format

Contestant
Judge

$\mathrm{"asset\ RB"}\quad i$

$\begin{aligned} & P^\mathrm{RB}_\mathrm{charge} & & P^\mathrm{RB}_\mathrm{discharge} & & \eta^\mathrm{RB} & & \mathrm{Cap}^\mathrm{RB} & & C^\mathrm{RB}_\mathrm{init} \\\end{aligned}$

### Details

- Return information of a product `i` of a storage rechargeable battery. $P^\mathrm{RB}_\mathrm{charge}$ is the maximum charging speed, $P^\mathrm{RB}_\mathrm{discharge}$ is the maximum discharging speed, $\eta^\mathrm{RB}$ is charging efficiency, $\mathrm{Cap}^\mathrm{RB}$ is the battery capacity, and $C^\mathrm{RB}_\mathrm{init}$ is the initial cost per unit of a battery.
- A valid RB `i` is an integer ranging from 1 to $N_\mathrm{RB}$.

### Asset EVC information `asset EVC [EVC_id]`

### Input and output format

Contestant
Judge

$\mathrm{"asset\ EVC"}\quad i$

$\begin{aligned}& P^\mathrm{EVC}_\mathrm{in} & & P^\mathrm{EVC}_\mathrm{out} & & C^\mathrm{EVC}_\mathrm{init} \\\end{aligned}$

### Details

- Return information of a product `i` of the EVC. $P^\mathrm{EVC}_{\mathrm{in}}$ is the maximum input power, $P^\mathrm{EVC}_{\mathrm{out}}$ is the maximum output power, and $C^\mathrm{EVC}_{\mathrm{init}}$ is the initial cost per unit of an EVC.
- A valid EVC `i` is an integer ranging from 1 to $N_\mathrm{EVC}$.
- A product with $P^\mathrm{EVC}_\mathrm{in} = P^\mathrm{EVC}_\mathrm{out} = C^\mathrm{EVC}_\mathrm{init} = 0$ is listed in the EVC catalog. If you will not install an EVC equipment at a nanogrid, please select this product. **It is noted that without installing EVC, EV or work machine charging/discharging cannot be operated at the nanogrid.**

### Asset vehicles information (`asset vehicle [v_id]`)

### Input and output format

Contestant
Judge

$\mathrm{"asset\ vehicle"}\quad i$

$\begin{aligned}& \mathrm{Cap}^V_\mathrm{ele} & & \mathrm{Cap}^V_\mathrm{pop} \\& P^V_{\mathrm{charge}} & & P^V_{\mathrm{discharge}} & & C^V_{\mathrm{init}} & & \Delta^V_{\mathrm{move}} \\\end{aligned}$

### Details

- Return information of a product `i` of the vehicles.
- In the 1st line, $\mathrm{Cap}^V_{\mathrm{ele}, i}$ is an EV charged capacity, $\mathrm{Cap}^V_{\mathrm{pop}, i}$ is order capacity.
- In the 2nd line, $P^V_\mathrm{charge}$ is the maximum charging speed, $P^V_{\mathrm{discharge}}$ is the maximum discharging speed, $C^V_{\mathrm{init}, i}$ is the cost per EV and $\Delta^V_{\mathrm{move}, i}$ is amount of energy needed per unit of movement.
- A valid `i` for asset vehicles information is an integer ranging from 1 to $N_\mathrm{V}$.

### Transportation request information (`order [day]`)

### Input and output format

Contestant
Judge

$\mathrm{"order"}\quad d$

$\begin{aligned}& o_1 & & \cdots & & o_{N_\mathrm{div}} \\\end{aligned}$

### Details

- Return information of the frequency of transportation requests on day `d`.
- $o_i$ is an expected value of transportation requests that occurs during the time interval $i$. See [Transportation request](https://atcoder.jp/contests/hokudai-hitachi2021/tasks/hokudai_hitachi2021_b#transportation-request) for details on the number of transportation requests. (Note: The transportation request information follows the Poisson distribution of the parameter $o_i$.)

### Evacuation center information (`shelter`)

### Input and output format

Contestant
Judge

$\mathrm{"shelter"}$

$\begin{aligned}& N_\mathrm{shelter} \\& x^\mathrm{shelter}_1 & & p^\mathrm{shelter}_1 \\& \vdots \\& x^\mathrm{shelter}_{N_\mathrm{shelter}} & & p^\mathrm{shelter}_{N_\mathrm{shelter}} \\& D^\mathrm{shelter}_1 & & \cdots & & D^\mathrm{shelter}_{N_\mathrm{div}} \\\end{aligned}$

### Details

- Return information of shelter.
- In the 1st line, $N_\mathrm{shelter}$ is the number of shelters.
- In the following $N_\mathrm{shelter}$ lines, information of shelters' position and capacity are provided. $x_i$ and $p_i$ represent position of shelter $i$ and its capacity, respectively.
- The following 1 line shows a standard power demand generated at shelters when a disaster occurs. $D^\mathrm{shelter}_i$ is the standard energy demand at time interval $i$. $D^\mathrm{shelter}_{i, j}$, representing the standard energy demand at time interval $i$ for each shelter, can be derived by using the following equation (round down the calculated number):

```plain
$\begin{aligned}D^\mathrm{shelter}_{i, j} = p^\mathrm{shelter}_j * D^\mathrm{shelter}_i / 100\end{aligned}$
```

-
When calculating the disaster response score, if the electricity demand area and the shelter are located at the same vertex, the energy demand at the relevant vertex is the sum of the energy demand from both the electricity demand area and the shelter.

### Work demand information (`work`)

Contestant
Judge

$\mathrm{"work"}$

$\begin{aligned}& N_\mathrm{work} \end{aligned}$

### Details

- $N_\mathrm{work}$ is the number of work demand areas.

### Work demand information in detail (`work [day] [id]`)

Contestant
Judge

$\mathrm{"work"}\quad d \quad i$

$\begin{aligned}& x & & \Delta^\mathrm{work} & & I^\mathrm{work}_\mathrm{min} & & D^\mathrm{work} \\& \mathrm{Cap}^\mathrm{work}_\mathrm{ele} & & P^\mathrm{work}_\mathrm{charge} & & P^\mathrm{work}_\mathrm{discharge} & & \eta^\mathrm{work} \\& A^{\rm work}_1 & & \cdots & & A^{\rm work}_{N_{\rm div}} \end{aligned}$

### Details

- [day] Returns the demand of the work in the work demand area specified by `i` on the day `d`.
- $x$ on the first line is the vertex number of the vertex where the work demand area exists, $\Delta^\mathrm{work}$ is the amount of power required for one step work, $I^\mathrm{work}_\mathrm{min}$ is the minimum number of continuous work steps, and $D^\mathrm{work}$ is the amount of work demand expressed by the number of steps.
- The first line gives information on the charging and discharging of the work machine.
$\mathrm{Cap}^\mathrm{work}_\mathrm{ele}$ is the maximum storrage capacity. <font color="red">$P^\mathrm{work}_\mathrm{charge}$</font> is the maximum charging speed,
<font color="red">$P^\mathrm{work}_\mathrm{discharge}$</font> is the maximum discharge rate, and $\eta^\mathrm{work}$ is the charge/discharge efficiency.
- The first line
is the amount of work that can be done in the given time interval or for each interval time. For the given $N_{\rm div}$ numbers, the $i$ number value $A^\mathrm{work}_i$ indicates the work availability in the given time interval $i$.
- Note that multiple work demands may be set at one vertex.

## Constraints for Input and Output

Of the following numbers, those described as **float** are given as floats, and the others are given as integers.

### Input and output format 1

- $40 \leq w_{\mathrm{day}, i} \leq 1000$
- $1000 \leq \alpha_\mathrm{cost} \leq 2000$
- $10000 \leq C_\mathrm{init} \leq 800000$
- $0 \leq w_\mathrm{trans} \leq 1$ [float]
- $0 \leq w_\mathrm{ele} \leq 1$ [float]
- $0 \leq w_\mathrm{env} \leq 1$ [float]
- $0 \leq w_\mathrm{acc} \leq 1$ [float]
- <font color="red">$0 \leq w_\mathrm{work} \leq 1$ </font>[float]
- $15 \leq \alpha^\mathrm{trans}_\mathrm{fee} \leq 20$ [float]
- $0.005 \leq \alpha^\mathrm{trans}_\mathrm{penalty} \leq 0.2$ [float]
- $50 \leq \alpha^\mathrm{trans}_\mathrm{undelivered} \leq 150$[float]
- <font color="red"> $500 \leq \alpha^\mathrm{trans}_\mathrm{canceled} \leq 1500$ </font> [float]
- $0.003 \leq \alpha^\mathrm{ele} \leq 0.015$ [float]
- <font color="red"> $0.05 \leq \alpha^\mathrm{ele}_\mathrm{FE} \leq 0.07$</font> [float]
- $0.004 \leq \alpha^\mathrm{ele}_\mathrm{buy} \leq 0.02$ [float]
- <font color="red"> $10000 \leq \alpha^\mathrm{work} \leq 300000$</font>
- $20 \leq \Delta^\mathrm{EV}_{\mathrm{move}, i} \leq 300$
- <font color="red">$0.008 \leq \alpha^\mathrm{env}_\mathrm{fuel} \leq 0.012$</font> [float]
- $0.0005 \leq \alpha^\mathrm{env}_\mathrm{buy} \leq 0.0025$ [float]
- $1000000 \leq \alpha^\mathrm{acc} \leq 8000000$
- $3000 \leq T_\mathrm{max} \leq 10000$
- $2700 \leq T_\mathrm{last} \leq 9000$
- $15 \leq N_\mathrm{div} \leq 30$
- $2 \leq N_\mathrm{day} \leq 16$
- $1 \leq N_\mathrm{acc} \leq 8$
- $150 \leq T_\mathrm{grace} \leq 700$
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
- $10 \leq \sigma_D^2 \leq 30$
- $0 \leq D^{\rm predict}_i \leq 200 (1 \leq i \leq N_\mathrm{div})$
- $0 \leq R^{\rm predict}_i \leq 10 (1 \leq i \leq N_\mathrm{div})$ [float]
- $2 \leq N_\mathrm{PV} \leq 3$
- $2 \leq N_\mathrm{FE} \leq 4$
- $2 \leq N_\mathrm{RB} \leq 3$
- $2 \leq N_\mathrm{EVC} \leq 5$
- $3 \leq N_V \leq 4$
- $10 \leq A^\mathrm{PV} \leq 15$
- $50 \leq C^\mathrm{PV}_{\mathrm{init}} \leq 120$
- $0 \leq P^\mathrm{FE}_\mathrm{min} \leq 140$
- $0 \leq P^\mathrm{FE}_\mathrm{max} \leq 500$
- $50 \leq \eta^\mathrm{FE}_\mathrm{min} \leq 600$
- $35 \leq \eta^\mathrm{FE}_\mathrm{max} \leq 400$
- $0 \leq C^\mathrm{FE}_\mathrm{init} \leq 4000$
- $130 \leq C^\mathrm{FE}_\mathrm{fuel} \leq 200$
- $14 \leq P^\mathrm{RB}_\mathrm{charge} \leq 36$
- $20 \leq P^\mathrm{RB}_\mathrm{discharge} \leq 55$
- $80 \leq \eta^\mathrm{RB} \leq 99$
- $8000 \leq \mathrm{Cap}^\mathrm{RB} \leq 100000$
- $250 \leq C^\mathrm{RB}_\mathrm{init} \leq 1000$
- $0 \leq P^\mathrm{EVC}_\mathrm{in} \leq 500$
- $0 \leq P^\mathrm{EVC}_\mathrm{out} \leq 500$
- $0 \leq C^\mathrm{EVC}_\mathrm{init} \leq 2000$
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
- $0 \leq N_\mathrm{work} \leq 16$
- $1 \leq x \leq V$
- $20 \leq \Delta^\mathrm{work} \leq 360$
- $50 \leq I^\mathrm{work}_\mathrm{min} \leq 333$
- $1400 \leq D^\mathrm{work} \leq 6000$
- $43200 \leq \mathrm{Cap}^\mathrm{work}_\mathrm{ele} \leq 186000$
- $55 \leq P^\mathrm{work}_\mathrm{charge} \leq 450$
- $85 \leq P^\mathrm{work}_\mathrm{discharge} \leq 720$
- $80 \leq \eta^\mathrm{work} \leq 99$
- $0 \leq A^{\rm work}_{i} \leq 1 (1 \leq i \leq N_\mathrm{div})$
- $D^\mathrm{work} \leq T_\mathrm{max}\sum_{i = 1}^{N_\mathrm{div}}A^{\rm work}_{i} / N_\mathrm{div}$

### Input and output format 2

- $S_\mathrm{trans}$ [float]
- $S_\mathrm{ele}$ [float]
- $S_\mathrm{env}$ [float]
- $1 \leq x^\mathrm{grid}_\mathrm{pos} \leq V$
- $0 \leq \mathrm{Chg}^\mathrm{grid}_\mathrm{init} \leq \mathrm{Cap}^\mathrm{RB} A^\mathrm{grid}_\mathrm{RB}$
- -   - $\mathrm{Cap}^\mathrm{RB}$ is the battery capacity of the installed RB and $A^\mathrm{grid}_\mathrm{RB}$ represents amount of the RB product to be installed.

- $1 \leq \mathrm{type}^\mathrm{grid}_\mathrm{PV} \leq N_\mathrm{PV}$
- $0 \leq A^\mathrm{grid}_\mathrm{PV}$
- $1 \leq \mathrm{type}^\mathrm{grid}_\mathrm{FE} \leq N_\mathrm{FE}$
- $1 \leq \mathrm{type}^\mathrm{grid}_\mathrm{RB} \leq N_\mathrm{RB}$
- $0 \leq A^\mathrm{grid}_\mathrm{RB}$
- $1 \leq \mathrm{type}^\mathrm{grid}_\mathrm{EVC} \leq N_\mathrm{EVC}$
- $1 \leq x^\mathrm{EV}_\mathrm{pos} \leq V$
- $1 \leq \mathrm{Chg}^\mathrm{EV}_\mathrm{init} \leq \mathrm{Cap}^V_\mathrm{ele}$
- -   - $\mathrm{Cap}^V_\mathrm{ele}$ is an installed EV battery storage capacity.

- $1 \leq \mathrm{type}_\mathrm{EV} \leq N_\mathrm{V}$

### Input and output format 3

- $0 \leq \mathrm{Chg}^\mathrm{grid}_i$
- $\mathrm{pw}^\mathrm{actual}_i$
- $0 \leq \mathrm{pw}^\mathrm{excess}_i$
- $0 \leq \mathrm{pw}^\mathrm{FE}_i$
- $0 \leq \mathrm{pw}^\mathrm{buy}_i$
- $0 \leq \mathrm{Chg}^\mathrm{EV}_i$
- $1 \leq u_i \leq V$
- $1 \leq v_i \leq V$
- $0 \leq \mathrm{dist}_i \leq d$
Here, $d$ is the length of the side where the EV is currently located. If the EV is just above one of the vertices, then $d = 0$.
- $0 \leq N^\mathrm{order}_i \leq N_\mathrm{div}*1000$
- $1 \leq o_{i, N^\mathrm{order}_1} \leq N^\mathrm{order}$
- $0 \leq \mathrm{Chg}^\mathrm{work}_i$
- $1 \leq x^\mathrm{work}_i \leq V$
- $0 \leq W^\mathrm{work}_i$
- $0 \leq w^\mathrm{work}_i$
- $0 \leq N_\mathrm{order} \leq 1000 * N_\mathrm{div}$
- $1 \leq \mathrm{id}_i \leq 1000 * N_\mathrm{div}$
- $1 \leq w_i \leq V$
- $1 \leq z_i \leq V$
- $-2 \leq \mathrm{state}_i \leq 2$
- $0 \leq \mathrm{time}_i \leq T_\mathrm{last}$

## Sample Code B

A software toolkit for scoring and testing on a local contestant environment is provided through the following [link](https://img.atcoder.jp/hokudai-hitachi2021/toolkit_B.zip). Sample code for beginners is also available.

- Test case
- Judge program
- Sample code