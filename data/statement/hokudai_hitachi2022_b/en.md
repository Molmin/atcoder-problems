Contents

1. [Problem Overview](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#problem-overview-en)
2. [Input 1](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#input1-en)1.    1. [Work time frame](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#work-time-frame-en)
2.    2. [Geographical data](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#geo-data-en)
3.    3. [Workers](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#worker-en)
4.    4. [Jobs](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#job-en)
5.    5. [Weather](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#weather-en)
6.    6. [Schedule](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#schedule-en)
3. [Output 1](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#output1-en)
4. [Input 2 (for each time point)](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#input2-en)1.    1. [Current weather](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#current-weather-en)
2.    2. [Job state](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#job-state-en)
3.    3. [Worker current location](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#worker-current-location-en)
4.    4. [Weather forecasts](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#weather-forecast-en)
5. [Output 2 (for each time point)](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#output2-en)1.    1. [Schedule submission](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#schedule-submission-en)
2.    2. [Worker actions](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#worker-action-en)
6. [Input 3 (Scoring)](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#input3-en)1.    1. [Scoring method](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#scoring-method-en)
2.    2. [Total reward amount](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#total-reward-amount-en)
3.    3. [Penalties for unfinished jobs](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#unfinished-penalty-en)
4.    4. [Schedule added points](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#schedule-added-point-en)
7. [Limits on tasks performed](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#task-limit-en)
8. [Test case generation rules](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#testcase-generation-rules-en)
9. [Ranking mehod](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#ranking-method-en)
10. [Constraints](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#constraints-en)
11. [Toolkit](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#toolkit-en)
12. [Visualizer](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#visualizer-en)

## Problem Overview

This problem is to maximize utilization of available machinery and personnel (referred to as “workers” for simplicity) for an agricultural equipment sharing service, accepting agricultural work (referred to as “jobs”) while maximizing reward*. You will initially select the jobs to accept from among many that are distributed over a space, and then produce and update job performance schedules, outputting instructions to workers to process the jobs. Each job is composed of multiple “tasks” requiring a specified amount of processing and is considered complete when workers have processed these “tasks”. Basically all accepted jobs must be completed (otherwise penalties for unfinished jobs will be applied). Reward is obtained by completing jobs, but amount of reward depends on when tasks were completed, so the appropriate time-frame for handling each task must be considered. The number of tasks that can be handled at a particular time is also dependent on the capabilities of the workers and the weather. Weather forecasts are provided for set periods of time.

*Reward: Assuming factors such as the harvest time for the crops and the rate of renewable energy supplied to agricultural equipment.

![](https://img.atcoder.jp/hokudai-hitachi2022/d1322d9e6b5804ee14b50150d0016990.png)
![](https://img.atcoder.jp/hokudai-hitachi2022/751c572a574f7439e188671d0fadd90d.png)
![](https://img.atcoder.jp/hokudai-hitachi2022/279b072d4bc44aac50b8e1b79bae7664.png)

The following data is given as the initial input.

1. Work time frame
2. Geographical data (graph)
3. Worker data
4. All job data
5. Weather related data
6. Schedule related data

Given this data, you shall output:

1. Which jobs you will accept.

Then, at the start of each time point, the following data will be provided as input:

1. Data regarding the accepted jobs.
2. The current location of workers.
3. Weather forecasts (for set intervals).

Based on this data, you must output:

1. A job performance schedule
2. Actions for each worker

This cycle is repeated until the specified work time frame ends.

Your output will be scored based on:

1. The reward earned.
2. Penalties for not finishing jobs.
3. Degree to which the schedule was followed and changed.

More detailed description is given below.

## Input 1

The initial input is:

1. Work time frame
2. Geographical data(graph)
3. Worker data
4. All job data
5. Weather related data
6. Schedule related data

This data is given on standard input in the following format:

```plain
$T_{\rm{max}}\\
N_V\,\,N_E\\
u_1\quad v_1\quad d_1\\
\vdots\\
u_{N_E}\,\, v_{N_E}\,\, d_{N_E}\\
N_{\rm{worker}}\\
v^{\rm{init}}_1\,\,L^\text{max}_1\,\,N^{\rm{JobType}}_1\,\,\text{Type}^1_1\,\,\text{Type}^1_2\,\,\cdots \text{Type}^1_{N^{\rm{JobType}}_1}\\
\vdots\\
v^{\rm{init}}_{N_{\rm{worker}}}\,\,L^\text{max}_{N_{\rm{worker}}}\,\,N^{\rm{JobType}}_{N_{\rm{worker}}}\,\,\text{Type}^{N_{\rm{worker}}}_1\,\,\text{Type}^{N_{\rm{worker}}}_2\,\,\cdots \text{Type}^{N_{\rm{worker}}}_{N^{\rm{JobType}}_1}\\
N_{\rm{job}}\\
\text{Job}_1\\
\vdots\\
\text{Job}_{N_{\rm{job}}}\\
T^{\rm{weather}}\,\,N^{\rm{weather}}\\
\begin{array}{llll}
p^{\rm{weather}}_{1,1} & p^{\rm{weather}}_{1,2} & \cdots & p^{\rm{weather}}_{1,N^{\rm{weather}}}\\
p^{\rm{weather}}_{2,1} & p^{\rm{weather}}_{2,2} & \cdots & p^{\rm{weather}}_{2,N^{\rm{weather}}}\\
\vdots & \vdots & \ddots & \vdots\\
p^{\rm{weather}}_{N^{\rm{weather}},1} & p^{\rm{weather}}_{N^{\rm{weather}},2} & \cdots & p^{\rm{weather}}_{N^{\rm{weather}},N^{\rm{weather}}}\\
\end{array}\\
c_1\,\,c_2\,\,\cdots\,\,c_{N^{\rm{weather}}}\\
P_m\,\, R_m\,\, \alpha\\
t_1\,\, p^1_1\,\, p^1_2\,\, \cdots \,\, p^1_{N^{\rm{weather}}}\\
t_2\,\, p^2_1\,\, p^2_2\,\, \cdots \,\, p^2_{N^{\rm{weather}}}\\
\vdots\\
t_{N'}\,\, p^{N'}_1\,\, p^{N'}_2\,\, \cdots \,\, p^{N'}_{N^{\rm{weather}}}$
```

(The structure for $\text{Job}_i$ is described below)

### Work Time Frame

- **Input**-   - The length of the work time frame,$T_\text{max}$, is given in the first line.

For this problem, time values, $t$, will be integer values from $1$ to $T_{\text{max}}$.

Input example
The following is an example with $T_\text{max}=300$

```plain
300
```

(the line ends with a line-feed character)

- Line1: Length of work time frame is `300` ($T_\text{max}=300$).

### Geographical Data

- **Input**-   - The next line gives the number of vertices, $N_V$, and edges, $N_E$, for a graph representing geographical data for the problem (a connected, non-directed graph with positive weightings). -   -   - The $N_V$ individual vertices will be numbered from $1$ to $N_V$.
-   - The following $N_E$ lines give data for each edge: vertices $u_i,v_i$, and weight $d_i$ (distance).Note that $1\leq i \leq N_E$.

As described below, [jobs](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#job-en) are located on vertices and [workers](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#worker-en) move along edges of this graph.

Input example
The following is an example with $N_V=14,N_E=19$:

```plain
14 19
1 7 1
1 2 1
2 9 1
2 3 1
3 5 1
3 7 1
3 6 1
4 13 2
4 10 2
4 6 1
4 5 1
6 8 1
7 8 1
8 14 2
9 11 2
10 12 2
10 11 2
12 13 2
13 14 2
```

(The last line ends with a line-feed character)

- Line 1: The graph has `14` vertices and `19` edges($N_V=14,N_E=19$).-   - Vertex indices from $1$ to `14` are assigned to these `14` vertices.
-   - Below, the vertex corresponding to vertex indices $i$ will be referred to simply as vertex $i$.
- Line 2: There is an edge of length `1` between vertices `1` and `7`($u_{1}=1,v_{1}=7,d_{1}=1$).
- Line 3: There is an edge of length `1` between vertices `1` and `2`($u_{2}=1,v_{2}=2,d_{2}=1$).
- Line 4: There is an edge of length `1` between vertices `2` and `9`($u_{3}=2,v_{3}=9,d_{3}=1$).
- Line 5: There is an edge of length `1` between vertices `2` and `3`($u_{4}=2,v_{4}=3,d_{4}=1$).
- Line 6: There is an edge of length `1` between vertices `3` and `5`($u_{5}=3,v_{5}=5,d_{5}=1$).
- Line 7: There is an edge of length `1` between vertices `3` and `7`($u_{6}=3,v_{6}=7,d_{6}=1$).
- Line 8: There is an edge of length `1` between vertices `3` and `6`($u_{7}=3,v_{7}=6,d_{7}=1$).
- Line 9: There is an edge of length `2` between vertices `4` and `13`($u_{8}=4,v_{8}=13,d_{8}=2$).
- Line 10: There is an edge of length `2` between vertices `4` and `10`($u_{9}=4,v_{9}=10,d_{9}=2$).
- Line 11: There is an edge of length `1` between vertices `4` and `6`($u_{10}=4,v_{10}=6,d_{10}=1$).
- Line 12: There is an edge of length `1` between vertices `4` and `5`($u_{11}=4,v_{11}=5,d_{11}=1$).
- Line 13: There is an edge of length `1` between vertices `6` and `8`($u_{12}=6,v_{12}=8,d_{12}=1$).
- Line 14: There is an edge of length `1` between vertices `7` and `8`($u_{13}=7,v_{13}=8,d_{13}=1$).
- Line 15: There is an edge of length `2` between vertices `8` and `14`($u_{14}=8,v_{14}=14,d_{14}=2$).
- Line 16: There is an edge of length `2` between vertices `9` and `11`($u_{15}=9,v_{15}=11,d_{15}=2$).
- Line 17: There is an edge of length `2` between vertices `10` and `12`($u_{16}=10,v_{16}=12,d_{16}=2$).
- Line 18: There is an edge of length `2` between vertices `10` and `11`($u_{17}=10,v_{17}=11,d_{17}=2$).
- Line 19: There is an edge of length `2` between vertices `12` and `13`($u_{18}=12,v_{18}=13,d_{18}=2$).
- Line 20($=1+N_E$): There is an edge of length `2` between vertices `13` and `14`($u_{19}=13,v_{19}=14,d_{19}=2$).

### Workers

Workers are entities that process jobs, and have capabilities to move and to perform tasks. They operate according to input from the contestant (See [Worker actions](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#worker-action-en)).

- **Input**-   - The number of workers, $N_{\text{worker}}$, is given on the next line.
-   - &lt;p&gt;
This is followed by $N_{\text{worker}}$ lines with worker configuration data:
&lt;/p&gt;-   -   - Initial position (vertex index): $v^{\text{init}}_i$
-   -   - The maximum tasks the worker can perform per unit time: $L^{\text{max}}_i$
-   -   - Number of job types the worker can perform,  $N^{\text{JobType}}_i$ , and a list of the job types: $\text{Type}^i_1\,\,\text{Type}^i_2\,\,\cdots\,\,\text{Type}^i_{N^{\text{JobType}}_i}$

($1\leq i \leq N_{\text{worker}}$)
&lt;p&gt;&lt;/p&gt;

These inputs are given in order of worker ID.

The upper limit for number of tasks performable per unit time and the types of jobs that can be done are different for each worker. The number of tasks that can actually be completed per unit time is also dependent on the weather.

Input example
The following is an example for $N_{\text{worker}}=5$:

```plain
5
6 100 3 1 2 3
13 59 1 3
10 55 2 2 3
9 47 3 1 2 3
9 89 1 2
```

(The last line ends with a line-feed character)

- Line 1: There are `5` workers ($N_{\text{worker}}=5$).
- Line 2: The descriptor for worker with ID=1.-   - The worker’s initial location is the vertex with vertex index `6` ($v^{\text{init}}_1=6$).
-   - The maximum number of tasks this worker can perform per unit of time is `100` ($L^{\text{max}}_1=100$).
-   - The worker can perform `3` types of job ($N^{\text{JobType}}_1=3$), of types `1`, `2`, `3` ($\text{Type}^1_1=1,\text{Type}^1_2=2,\text{Type}^1_3=3$).
- Line 3: The descriptor for worker with ID=2.-   - The worker’s initial location is the vertex with vertex index `13` ($v^{\text{init}}_2=13$).
-   - The maximum number of tasks this worker can perform per unit of time is `59` ($L^{\text{max}}_2=59$).
-   - The worker can perform `1` types of job ($N^{\text{JobType}}_2=1$), of type `3` ($\text{Type}^2_1=3$).
- Line 4: The descriptor for worker with ID=3.-   - The worker’s initial location is the vertex with vertex index `10` ($v^{\text{init}}_3=10$).
-   - The maximum number of tasks this worker can perform per unit of time is `55` ($L^{\text{max}}_3=55$).
-   - The worker can perform `2` types of job ($N^{\text{JobType}}_3=2$), of types `2`, `3` ($\text{Type}^3_1=2,\text{Type}^3_2=3$).
- Line 5: The descriptor for worker with ID=4.-   - The worker’s initial location is the vertex with vertex index `9` ($v^{\text{init}}_4=9$).
-   - The maximum number of tasks this worker can perform per unit of time is `47` ($L^{\text{max}}_4=47$).
-   - The worker can perform `3` types of job ($N^{\text{JobType}}_4=3$), of types `1`, `2`, `3` ($\text{Type}^4_1=1,\text{Type}^4_2=2,\text{Type}^4_3=3$).
- Line 6($=1+N_{\text{worker}}$): The descriptor for worker with ID=5.-   - The worker’s initial location is the vertex with vertex index `9` ($v^{\text{init}}_5=9$).
-   - The maximum number of tasks this worker can perform per unit of time is `89` ($L^{\text{max}}_5=89$).
-   - The worker can perform `1` types of job ($N^{\text{JobType}}_5=1$), of type `2` ($\text{Type}^5_1=2$).

### Jobs

A job is work that workers perform at one of the vertices.

- **A job:**-   - Is a unit of work in the real world, such as harvesting a crop or applying agricultural chemicals.
-   - Is composed of multiple smaller work tasks. For example, picking a single piece of fruit, harvesting a set area of rice plants, or spreading a chemical over a set area. These smaller amounts of work comprising a job will be called “tasks”.
-   - A job is completed by completing the set number of tasks that comprise the job.
-   - In reality, a job could consist of multiple types of task, but in this case, we focus on just the number of tasks. Thus, **a job is completed by just processing a set number of a task**.
-   - The location of a job is different for each job. For this problem, **this is represented by locating each job on a vertex of the &amp;lt;a href="#geo-data-en"&amp;gt;geographical data&amp;lt;/a&amp;gt; graph** given with the problem.
- **Task processing and reward**-   - The tasks for each job are processed by [workers](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#worker-en).
-   - The contestant shall output instructions for each worker to **move** and **perform work**, to move them to the vertex of a job and to perform the job’s tasks.
-   - The contestant will receive reward by **&amp;lt;font color="#DC143C"&amp;gt;completing jobs (processing the set number of tasks)&amp;lt;/font&amp;gt;**.
-   - Each worker has an upper limit to the number of tasks they can process per unit time ([Limits on tasks performed](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#task-limit-en)), so completion of a job will take a certain amount of time. Typically, a set number of tasks are processed during each set time interval from a set time.
-   - **The amount of reward received when completing a job will depend on the time when tasks were processed**. More specifically, it is the sum for all time intervals ($t=1,2,\cdots,T_\text{max}$), of &lt;p style="text-align:center;"&gt;the product of the reward rate per task processed at that time point $r(t)$ $\times$ the number of that task processed at that time point&lt;/p&gt;
-   - The reward rate, $r(t)$ for processing the task at each time point **is different for each job**.
-   - The total reward collected by all workers will be the main constituent of the score for this problem ([Scoring method](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#scoring-method-en)). Contestants need to decide worker actions to maximize this total reward, while also considering the other elements.
- **Dependencies between jobs**-   - Some jobs are dependent on other jobs. That is, if a job is dependent on another job, its tasks cannot be processed until the tasks of the other job have been completed.
-   - If a job is not dependent on another job, there are no such constraints.
- **Accepting jobs**-   - The contestant must **select jobs to accept at the beginning of the problem** ([Output 1](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#output1-en)).
-   - **There are jobs that are mandatory**, so the selected jobs must include all mandatory jobs.
-   - If all of the selected jobs are not completed by the end of the work time frame, an **unfinished-job penalty** specified per-job **will be incurred**.

Various constraints

- Tasks cannot be processed during time intervals when reward is not available (when the reward per unit task is zero).
- The number of tasks that a worker is able to perform per unit time is affected by the weather ([Constraints on tasks performed](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#task-limit-en))
- Jobs that have not been accepted cannot be performed.

- **Input**-   - The next line gives $N_{\text{job}}$, the number of jobs.
-   - This is followed by lines indicating the composition of each job, $\text{Job}_i$, for the $N_{\text{job}}$ jobs($N_{\text{job}}\times 3$ lines).

The composition of $\text{Job}_i$ is given in the following format:

```plain
$\text{ID}^{\rm{job}}_i\,\,\text{Type}_i\,\,N^{\rm{task}}_i\,\,v^{\rm{job}}_i\,\, P^{\rm{job}}_i\,\,d^\text{weather}_i\,\, f^{\rm{mandatory}}_i\\
N^{\rm{reward}}_i\,\, t^{\rm{reward}}_{i,1}\,\, y^{\rm{reward}}_{i,1}\cdots t^{\rm{reward}}_{i,N^{\rm{reward}}_i}\,\, y^{\rm{reward}}_{i,N^{\rm{reward}}_i}\\
N^{\rm{depend}}_i\,\, {\rm{id}}^{\rm{depend}}_{i,1}\,\, \cdots \,\,{\rm{id}}^{\rm{depend}}_{i,N^{\rm{depend}}_i}$
```

- Line 1-   - Job ID: $\text{ID}^{\text{job}}_i$
-   - Job type: $\text{Type}_i$
-   - No. of tasks to complete: $N^{\text{task}}_i$
-   - Job location (vertex index): $v^{\text{job}}_i$
-   - The penalty factor for jobs accepted but not finished: $P^{\text{job}}_i$
-   - Dependency on weather: $d^\text{weather}_i$
-   - Mandatory job flag: $f^{\text{mandatory}}_i$ ($0$: optional, $1$: mandatory)
- Line 2 (definition of reward function, $r(t)$)-   - Number of control points in reward function:$N^{\text{reward}}_i$
-   - Control point list:$t^{\rm{reward}}_{i,1}\,\,y^{\rm{reward}}_{i,1}\,\,t^{\rm{reward}}_{i,2}\,\,y^{\rm{reward}}_{i,2}\,\,\cdots\,\,t^{\rm{reward}}_{i,N^{\text{reward}}_i}\,\,y^{\rm{reward}}_{i,N^{\text{reward}}_i}$
- Line 3 (job dependencies)-   - Number of job dependencies: $N^{\text{depend}}_i$
-   - Dependency job IDs: ${\rm{id}}^{\rm{depend}}_{i,1}\,\,{\rm{id}}^{\rm{depend}}_{i,2}\,\, \cdots \,\,{\rm{id}}^{\rm{depend}}_{i,N^{\rm{depend}}_i}$

Reward function $r(t)$ details
The per-task reward at time $t$ function $r(t)$ is defined by one or more control points (time and value pairs) and linear interpolation between those points.

In other words, given a list of control points, $p=((t_i,y_i))_{i=1,\cdots,n}$  ($t_i,y_i\in \mathbb{Z},t_1 &lt; t_2 &lt; \cdots &lt; t_n,n\geq 1$), the per-task reward at time $t$ function $r(t)$ (actually $r(t;p)$), is defined as:

$r(t)=\begin{cases}
y_1, &amp; \text{if}\,\, t &lt; t_1, \\
y_n, &amp; \text{if}\,\, t \geq t_n, \\
(y_\text{next}-y_\text{prev})(t-t_\text{prev})/(t_\text{next}-t_\text{prev})+y_\text{prev}, &amp; \text{otherwise}.
\end{cases}$

Here, $(t_\text{prev},y_\text{prev})$ is the pair with the largest time that does not exceed $t$, and $(t_\text{next},y_\text{next})$ is the pair with the smallest time that exceeds $t$.

$r(t)$, integral multiples of $r(t)$ and their sum are computed in decimals.

Input example
The following is an example with $N_{\text{job}}=6$ (Note that this is a very small number of jobs):

```plain
6
1 1 906 10 0.94469412898840599 0.07857326752336613 0
13 11 0 12 1212810 37 1849941 63 2266874 88 1944271 113 1207029 139 768959 164 808665 189 992126 214 1137116 240 907954 265 903397 266 0
0
2 3 905 2 0.96478158647239831 0.056877102556647817 0
7 92 0 93 1280499 121 1553205 149 1429506 176 1419189 204 1731967 205 0
0
3 1 1052 4 0.94436951517275258 0.071240847781028308 0
7 191 0 192 1914094 218 1735762 244 1444725 270 1275768 296 975408 297 0
0
4 3 653 4 0.95274950239675604 0.14137003825803521 0
10 70 0 71 1319303 94 1329844 118 1503315 141 1161131 165 1294526 188 849137 212 1953166 235 2087503 236 0
1 2
5 1 1452 12 0.95747093286627682 0.076042573628832266 0
8 122 0 123 1667665 149 911519 174 1511934 200 1967913 225 1633211 251 1589845 252 0
2 6 4
6 2 737 6 0.95812926774107732 0.049371044631834608 1
11 82 0 83 1431723 108 1475010 133 1032345 158 1012865 183 1593586 207 1923638 232 1956884 257 2797127 282 2877123 283 0
0
```

- Line 1: The total number of jobs is `6`. ($N_{\text{job}}=6$)-   - The actual problem given will consist of several hundreds of jobs.
- Line 2: Start of description for job with ID=1.-   - The job ID is `1` ($\text{ID}^{\text{job}}_1=1$).
-   - The job type is `1` ($\text{Type}_1=1$).
-   - The number of tasks required to complete this job is `906` ($N^{\text{task}}_1=906$).
-   - The job is located at vertex `10` ($v^{\text{job}}_1=10$).
-   - If this job is accepted, but not finished by the end of the work time frame ($T_\text{max}$), an unfinished-job penalty of `0.94469412898840599` will be applied ([Scoring method](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#scoring-method-en)) ($P^{\text{job}}_1=0.94469412898840599$).
-   - Dependency of this job on weather is `0.07857326752336613` ([Limits on tasks performed](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#task-limit-en)) ($d^\text{weather}_1=0.07857326752336613$).
-   - This job is not mandatory ($f^{\text{mandatory}}_1=0$).
- Line 3: Definition of reward function for the job with ID=1.-   - There are `13` control points ($N^{\text{reward}}_1=13$).
-   - The list of control points is: ((`11`,`0`), (`12`,`1212810`), (`37`,`1849941`), (`63`,`2266874`), (`88`,`1944271`), (`113`,`1207029`), (`139`,`768959`), (`164`,`808665`), (`189`,`992126`), (`214`,`1137116`), (`240`,`907954`), (`265`,`903397`), (`266`,`0`)).-   -   - The times for which reward can be obtained are $12,13,\cdots,265$.
- Line 4: The jobs that the job with ID=1 depends on. This completes the description of the job with ID=1.-   - The number of jobs this job depends on is `0`($N^{\text{depend}}_1=0$).
-   - (Since the number of jobs it depends on is `0`, no job IDs are given.)
- Line 5: Start of description for job with ID=2.-   - The job ID is `2` ($\text{ID}^{\text{job}}_2=2$).
-   - The job type is `3` ($\text{Type}_2=3$).
-   - The number of tasks required to complete this job is `905` ($N^{\text{task}}_2=905$).
-   - The job is located at vertex `2` ($v^{\text{job}}_2=2$).
-   - If this job is accepted, but not finished by the end of the work time frame ($T_\text{max}$), an unfinished-job penalty of `0.96478158647239831` will be applied ([Scoring method](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#scoring-method-en)) ($P^{\text{job}}_2=0.96478158647239831$).
-   - Dependency of this job on weather is `0.056877102556647817` ([Limits on tasks performed](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#task-limit-en)) ($d^\text{weather}_2=0.056877102556647817$).
-   - This job is not mandatory ($f^{\text{mandatory}}_2=0$).
- Line 6: Definition of reward function for the job with ID=2.-   - There are `7` control points ($N^{\text{reward}}_2=7$).
-   - The list of control points is: ((`92`,`0`), (`93`,`1280499`), (`121`,`1553205`), (`149`,`1429506`), (`176`,`1419189`), (`204`,`1731967`), (`205`,`0`)).-   -   - The times for which reward can be obtained are $93,94,\cdots,204$.
- Line 7: The jobs that the job with ID=2 depends on. This completes the description of the job with ID=2.-   - The number of jobs this job depends on is `0`($N^{\text{depend}}_2=0$).
-   - (Since the number of jobs it depends on is `0`, no job IDs are given.)
- Line 8: Start of description for job with ID=3.-   - The job ID is `3` ($\text{ID}^{\text{job}}_3=3$).
-   - The job type is `1` ($\text{Type}_3=1$).
-   - The number of tasks required to complete this job is `1052` ($N^{\text{task}}_3=1052$).
-   - The job is located at vertex `4` ($v^{\text{job}}_3=4$).
-   - If this job is accepted, but not finished by the end of the work time frame ($T_\text{max}$), an unfinished-job penalty of `0.94436951517275258` will be applied ([Scoring method](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#scoring-method-en)) ($P^{\text{job}}_3=0.94436951517275258$).
-   - Dependency of this job on weather is `0.071240847781028308` ([Limits on tasks performed](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#task-limit-en)) ($d^\text{weather}_3=0.071240847781028308$).
-   - This job is not mandatory ($f^{\text{mandatory}}_3=0$).
- Line 9: Definition of reward function for the job with ID=3.-   - There are `7` control points ($N^{\text{reward}}_3=7$).
-   - The list of control points is: ((`191`,`0`), (`192`,`1914094`), (`218`,`1735762`), (`244`,`1444725`), (`270`,`1275768`), (`296`,`975408`), (`297`,`0`)).-   -   - The times for which reward can be obtained are $192,193,\cdots,296$.
- Line 10: The jobs that the job with ID=3 depends on. This completes the description of the job with ID=3.-   - The number of jobs this job depends on is `0`($N^{\text{depend}}_3=0$).
-   - (Since the number of jobs it depends on is `0`, no job IDs are given.)
- Line 11: Start of description for job with ID=4.-   - The job ID is `4` ($\text{ID}^{\text{job}}_4=4$).
-   - The job type is `3` ($\text{Type}_4=3$).
-   - The number of tasks required to complete this job is `653` ($N^{\text{task}}_4=653$).
-   - The job is located at vertex `4` ($v^{\text{job}}_4=4$).
-   - If this job is accepted, but not finished by the end of the work time frame ($T_\text{max}$), an unfinished-job penalty of `0.95274950239675604` will be applied ([Scoring method](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#scoring-method-en)) ($P^{\text{job}}_4=0.95274950239675604$).
-   - Dependency of this job on weather is `0.14137003825803521` ([Limits on tasks performed](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#task-limit-en)) ($d^\text{weather}_4=0.14137003825803521$).
-   - This job is not mandatory ($f^{\text{mandatory}}_4=0$).
- Line 12: Definition of reward function for the job with ID=4.-   - There are `10` control points ($N^{\text{reward}}_4=10$).
-   - The list of control points is: ((`70`,`0`), (`71`,`1319303`), (`94`,`1329844`), (`118`,`1503315`), (`141`,`1161131`), (`165`,`1294526`), (`188`,`849137`), (`212`,`1953166`), (`235`,`2087503`), (`236`,`0`)).-   -   - The times for which reward can be obtained are $71,72,\cdots,235$.
- Line 13: The jobs that the job with ID=4 depends on. This completes the description of the job with ID=4.-   - The number of jobs this job depends on is `1`($N^{\text{depend}}_4=1$).
-   - This job depends on the job with ID=`2`($\text{id}^\text{depend}_{4,1}=2$).
- Line 14: Start of description for job with ID=5.-   - The job ID is `5` ($\text{ID}^{\text{job}}_5=5$).
-   - The job type is `1` ($\text{Type}_5=1$).
-   - The number of tasks required to complete this job is `1452` ($N^{\text{task}}_5=1452$).
-   - The job is located at vertex `12` ($v^{\text{job}}_5=12$).
-   - If this job is accepted, but not finished by the end of the work time frame ($T_\text{max}$), an unfinished-job penalty of `0.95747093286627682` will be applied ([Scoring method](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#scoring-method-en)) ($P^{\text{job}}_5=0.95747093286627682$).
-   - Dependency of this job on weather is `0.076042573628832266` ([Limits on tasks performed](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#task-limit-en)) ($d^\text{weather}_5=0.076042573628832266$).
-   - This job is not mandatory ($f^{\text{mandatory}}_5=0$).
- Line 15: Definition of reward function for the job with ID=5.-   - There are `8` control points ($N^{\text{reward}}_5=8$).
-   - The list of control points is: ((`122`,`0`), (`123`,`1667665`), (`149`,`911519`), (`174`,`1511934`), (`200`,`1967913`), (`225`,`1633211`), (`251`,`1589845`), (`252`,`0`)).-   -   - The times for which reward can be obtained are $123,124,\cdots,251$.
- Line 16: The jobs that the job with ID=5 depends on. This completes the description of the job with ID=5.-   - The number of jobs this job depends on is `2`($N^{\text{depend}}_5=2$).
-   - This job depends on the jobs with ID=`6`,`4`($\text{id}^\text{depend}_{5,1}=6,\text{id}^\text{depend}_{5,2}=4$).
- Line 17: Start of description for job with ID=6.-   - The job ID is `6` ($\text{ID}^{\text{job}}_6=6$).
-   - The job type is `2` ($\text{Type}_6=2$).
-   - The number of tasks required to complete this job is `737` ($N^{\text{task}}_6=737$).
-   - The job is located at vertex `6` ($v^{\text{job}}_6=6$).
-   - If this job is accepted, but not finished by the end of the work time frame ($T_\text{max}$), an unfinished-job penalty of `0.95812926774107732` will be applied ([Scoring method](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#scoring-method-en)) ($P^{\text{job}}_6=0.95812926774107732$).
-   - Dependency of this job on weather is `0.049371044631834608` ([Limits on tasks performed](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#task-limit-en)) ($d^\text{weather}_6=0.049371044631834608$).
-   - **This job is mandatory **($f^{\text{mandatory}}_6=1$).
- Line 18: Definition of reward function for the job with ID=6.-   - There are `11` control points ($N^{\text{reward}}_6=11$).
-   - The list of control points is: ((`82`,`0`), (`83`,`1431723`), (`108`,`1475010`), (`133`,`1032345`), (`158`,`1012865`), (`183`,`1593586`), (`207`,`1923638`), (`232`,`1956884`), (`257`,`2797127`), (`282`,`2877123`), (`283`,`0`)).-   -   - The times for which reward can be obtained are $83,84,\cdots,282$.
- Line 19($=1+3\times N_{\text{job}}$): The jobs that the job with ID=6 depends on. This completes the description of the job with ID=6.-   - The number of jobs this job depends on is `0`($N^{\text{depend}}_6=0$).
-   - (Since the number of jobs it depends on is `0`, no job IDs are given.)

### Weather

Weather is a value that affects the number of tasks that can be performed, and this state changes probabilistically at each time point.

- **Input**-   - In the next line, the length of a fundamental weather segment, $T^\text{weather}$, and the number of weather states, $N^\text{weather}$, is given.
-   - On each of the next $N^\text{weather}$ lines, the probabilities for transitioning from state $i$to the other states, $p^{\text{weather}}_{i,1} \,\, p^{\text{weather}}_{i,2} \,\,\cdots \,\, p^{\text{weather}}_{i,N^{\text{weather}}}$, are given (transition probability matrix).
-   - The next line gives constants, $c_1\,\,c_2\,\,\cdots\,\,c_{N_\text{weather}}$, for calculating [limits on tasks performed](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#task-limit) for each weather state.

**For this problem the value is fixed to $N^\text{weather}=7$ and the weather states are:&lt;font color="#DC143C"&gt;Sunny (1), mostly sunny (2), lightly cloudy (3), cloudy (4), light rain (5), medium rain (6), and heavy rain (7)&lt;/font&gt;**

Weather behavior and updating
Fundamental weather and actual weather states are maintained internally, and the actual weather state is what directly affects the number of tasks that can be performed.

### Fundamental Weather

The total length of work time frame is divided equally into fundamental weather segments, $b_i (i=1,\cdots,n(=T_\text{max}/T^\text{weather}))$, of length $T^\text{weather}$.

Each $b_i$ has an independent weather state, $w_i$, which is called the fundamental weather state.

At time point $t=1$, all $w_i$ are determined probabilistically and independently according to the stationary distribution of the transition probability matrix.
Thereafter, every time $T^\text{weather}$ time elapses, $w_i$ in each segment is updated independently according to the transition probability matrix.

### Actual Weather State

Here we call the actual weather state $w$. $w$ is updated as follows:

At the beginning of time $t$,

- if $t$ equals the start time of weather segment $b_i$ :$w \leftarrow w_i$ (set $w$ to $w_i$)
- In other cases:update $w$ according to the transition probability matrix.

Note that updating of fundamental weather state is performed before updating the actual weather state.

When weather (value or state) is mentioned  in other sections, it refers to the actual weather state, $w$.

The seed value used to determine the weather is given a different value for each test case.

In [Input 2](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#input2-en), the probabilities for each weather state in each $T^\text{weather}$ interval in the future are given each time $T^\text{weather}$ elapses, starting at time $t=1$ (including the probability data at time $t=1$).

Input example
The following is an example with $T^\text{weather}=10$ and $N^\text{weather}=7$.

```plain
10 7
0.65038945819291316 0.3456395688250497 0.0039709729820371371 0 0 0 0
0.29367291714300126 0.57978625074387669 0.11253142456916906 0.014009407543952863 0 0 0
1.4131189430426344e-09 0.18905960051799561 0.44909739165434842 0.32239542530231813 0.039447581112218938 0 0
0 0.043752041690362654 0.079271361143687852 0.87011603340370036 0.0033077052290538069 0.0035528585331954204 0
0 0 0.015190350742277408 0.044334491311077411 0.90080171493640016 0.039640375730251982 3.3067279992976463e-05
0 0 0 2.9123680876183852e-09 0.21976983161374733 0.68711791872304939 0.093112246750835195
0 0 0 0 0.018677162951541051 0.41030647336908055 0.57101636367937847
0 1 2 3 10 14 20
```

- Line 1: The fundamental weather segment length is `10`, and there are `7` weather states in total($T^\text{weather}=10,N^\text{weather}=7$).
- Line 2: The (fundamental) transition probabilities from state $1$ to states $1,2,3,4,5,6,7$ are:`0.65038945819291316`,`0.3456395688250497`,`0.0039709729820371371`,`0`,`0`,`0`,`0`, respectively.
- Line 3: The (fundamental) transition probabilities from state $2$ to states $1,2,3,4,5,6,7$ are:`0.29367291714300126`,`0.57978625074387669`,`0.11253142456916906`,`0.014009407543952863`,`0`,`0`,`0`, respectively.
- Line 4: The (fundamental) transition probabilities from state $3$ to states $1,2,3,4,5,6,7$ are:`1.4131189430426344e-09`,`0.18905960051799561`,`0.44909739165434842`,`0.32239542530231813`,`0.039447581112218938`,`0`,`0`, respectively.
- Line 5: The (fundamental) transition probabilities from state $4$ to states $1,2,3,4,5,6,7$ are:`0`,`0.043752041690362654`,`0.079271361143687852`,`0.87011603340370036`,`0.0033077052290538069`,`0.0035528585331954204`,`0`, respectively.
- Line 6: The (fundamental) transition probabilities from state $5$ to states $1,2,3,4,5,6,7$ are:`0`,`0`,`0.015190350742277408`,`0.044334491311077411`,`0.90080171493640016`,`0.039640375730251982`,`3.3067279992976463e-05`, respectively.
- Line 7: The (fundamental) transition probabilities from state $6$ to states $1,2,3,4,5,6,7$ are:`0`,`0`,`0`,`2.9123680876183852e-09`,`0.21976983161374733`,`0.68711791872304939`,`0.093112246750835195`, respectively.
- Line 8: The (fundamental) transition probabilities from state $7$ to states $1,2,3,4,5,6,7$ are:`0`,`0`,`0`,`0`,`0.018677162951541051`,`0.41030647336908055`,`0.57101636367937847`, respectively.
- Line 9: The limit constants for states $1,2,3,4,5,6,7$ are:`0`,`1`,`2`,`3`,`10`,`14`,`20`, respectively.

### Schedule

Contestants must produce a schedule of jobs to perform for each worker (when, which job, how much), and will gain additional points for performance according to the schedule. The added points will be less for not performing on schedule. The schedule can be changed during execution, but the additional points awarded will decrease more for changes made close to the time. Conversely, changing the schedule farther in the future will reduce added points less.

See [Output 2](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#output2-en) for detail regarding schedule evaluation.

If not intending to submit a schedule, any schedule can be submitted.

- **Input**-   - The next line provides the maximum schedule change penalty  $P_m$, the schedule change penalty decay rate $R_m$, and the schedule additional point coefficient $\alpha$.

Input example

```plain
0.029878077064496654 0.99054720249346828 0.87563809736779619
```

- Line 1: The maximum schedule change penalty is `0.029878077064496654`, the schedule change penalty decay rate is `0.99054720249346828`, and the schedule additional point coefficient is `0.87563809736779619`.($P_m=0.029878077064496654,R_m=0.99054720249346828,\alpha=0.87563809736779619$)

### Weather Forecasts

To decide which jobs to accept, weather forecast data is provided as input at the start time ($t=1$). The structure is the same as [Weather forecast](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#weather-forecast-en) for Input 2, so refer to that section for detail.

Full Input 1 example

```plain
300
14 19
1 7 1
1 2 1
2 9 1
2 3 1
3 5 1
3 7 1
3 6 1
4 13 2
4 10 2
4 6 1
4 5 1
6 8 1
7 8 1
8 14 2
9 11 2
10 12 2
10 11 2
12 13 2
13 14 2
5
6 100 3 1 2 3
13 59 1 3
10 55 2 2 3
9 47 3 1 2 3
9 89 1 2
6
1 1 906 10 0.94469412898840599 0.07857326752336613 0
13 11 0 12 1212810 37 1849941 63 2266874 88 1944271 113 1207029 139 768959 164 808665 189 992126 214 1137116 240 907954 265 903397 266 0
0
2 3 905 2 0.96478158647239831 0.056877102556647817 0
7 92 0 93 1280499 121 1553205 149 1429506 176 1419189 204 1731967 205 0
0
3 1 1052 4 0.94436951517275258 0.071240847781028308 0
7 191 0 192 1914094 218 1735762 244 1444725 270 1275768 296 975408 297 0
0
4 3 653 4 0.95274950239675604 0.14137003825803521 0
10 70 0 71 1319303 94 1329844 118 1503315 141 1161131 165 1294526 188 849137 212 1953166 235 2087503 236 0
1 2
5 1 1452 12 0.95747093286627682 0.076042573628832266 0
8 122 0 123 1667665 149 911519 174 1511934 200 1967913 225 1633211 251 1589845 252 0
2 6 4
6 2 737 6 0.95812926774107732 0.049371044631834608 1
11 82 0 83 1431723 108 1475010 133 1032345 158 1012865 183 1593586 207 1923638 232 1956884 257 2797127 282 2877123 283 0
0
10 7
0.65038945819291316 0.3456395688250497 0.0039709729820371371 0 0 0 0
0.29367291714300126 0.57978625074387669 0.11253142456916906 0.014009407543952863 0 0 0
1.4131189430426344e-09 0.18905960051799561 0.44909739165434842 0.32239542530231813 0.039447581112218938 0 0
0 0.043752041690362654 0.079271361143687852 0.87011603340370036 0.0033077052290538069 0.0035528585331954204 0
0 0 0.015190350742277408 0.044334491311077411 0.90080171493640016 0.039640375730251982 3.3067279992976463e-05
0 0 0 2.9123680876183852e-09 0.21976983161374733 0.68711791872304939 0.093112246750835195
0 0 0 0 0.018677162951541051 0.41030647336908055 0.57101636367937847
0 1 2 3 10 14 20
0.029878077064496654 0.99054720249346828 0.87563809736779619
1 0 0 0 0 1 0 0
11 0.32997661987364896 0.35720093880279286 0.10144180605929307 0.18397452127884667 0.023582674286464638 0.0033945272798704107 0.00042891241908338078
21 0.26146895868607978 0.29829553702903927 0.10367350846525671 0.27413103299772817 0.050432669277988201 0.010115966874572493 0.0018823266693354056
31 0.20903275687358913 0.2506351074109075 0.10197621041600768 0.32306215864825039 0.090561788952494518 0.020385340563280511 0.0043466371354700514
41 0.16453280991499084 0.20329129777873356 0.091390970778385427 0.30920472674724836 0.18000987309438846 0.041926491747270762 0.0096438299389825944
51 0.21773018584216544 0.25781470723187322 0.10129611879665416 0.30911960619088807 0.089756375035668315 0.020014729744938529 0.0042682771578124723
61 0.18695780159879197 0.22637031212950884 0.095692191594510659 0.30993166346993428 0.14119172380160475 0.032519854076175789 0.0073364533294737588
71 0.19978365794228928 0.23953773160128791 0.098109392505800377 0.31008680745444389 0.11925953673379487 0.027193693951331609 0.0060291798110520588
81 0.20381180897940113 0.24366400563862556 0.098856417213860404 0.3100620551039589 0.11244486750690874 0.02553797224640603 0.0056228733108393747
91 0.21098420754865557 0.2510068631469719 0.10018090439250056 0.30998380940692433 0.10034511870194431 0.02259771906125015 0.0049013777417531382
101 0.21017332149772244 0.25017760625955138 0.10003235653165234 0.30999988763169445 0.10170583135583394 0.022928465225827428 0.0049825314977181429
111 0.21035975914577648 0.25036818399930888 0.10006639945926016 0.30999551883837906 0.10139365148795368 0.02285257565351554 0.0049639114158061791
121 0.21006375850103443 0.25006523326156821 0.10001185087147714 0.3099994276865809 0.10189232028110375 0.022973761374232418 0.0049936480240032411
131 0.21003860874539299 0.25003947404099974 0.1000071910191422 0.30999960764692047 0.10193484214518268 0.022984093048729243 0.0049961833536327927
141 0.21002336947231043 0.25002386973415752 0.10000437307823702 0.30999975094869503 0.1019605735904045 0.022990345532450621 0.0049977176437451558
151 0.21001036314333912 0.25001055377029446 0.10000197057271488 0.30999988860662192 0.1019825193444605 0.022995678324735189 0.0049990262378340521
161 0.2098468891366603 0.24984320350327363 0.099971794472248382 0.31000174310451423 0.10225822676243579 0.023062676470061792 0.0050154665508059335
171 0.21001766063059757 0.25001802405322704 0.10000331731605842 0.30999980388842874 0.10197021368851594 0.022992687970461667 0.0049982924527108988
181 0.21000312608202204 0.25000314492830189 0.10000063442967058 0.30999996928440271 0.10199472644850339 0.022998644688091742 0.0049997541390076946
191 0.21000646152716931 0.25000655944481537 0.10000125010448897 0.30999993130167014 0.10198910119136487 0.022997277723427214 0.0049994187070641306
201 0.21000390597655963 0.25000394330415704 0.10000077837739391 0.30999996034571875 0.10199341120724155 0.022998325077383485 0.0049996757115455511
211 0.21000068372351638 0.25000064465305499 0.10000018358284854 0.30999999695861213 0.10199884564588058 0.022999645671209767 0.004999999764877615
221 0.21000123276535285 0.25000120671230119 0.10000028493014526 0.3099999907192631 0.10199791966912596 0.022999420654547454 0.0049999445492642201
231 0.2100001748189628 0.25000012368230085 0.10000008964391316 0.31000000273847578 0.10199970393318095 0.022999854238977081 0.0050000509441893055
241 0.21000051371752923 0.25000047061605735 0.10000015220117091 0.30999999888829144 0.10199913236874111 0.022999715346170929 0.0050000168620389848
251 0.21000030618472809 0.25000025816270716 0.10000011389270266 0.31000000124600918 0.10199948238020001 0.022999800400576097 0.0050000377330769279
261 0.2100000445095816 0.2499999902833088 0.1000000655900994 0.31000000421880708 0.10199992370466664 0.022999907644464797 0.0050000640490715734
271 0.21000008909654816 0.25000003592742104 0.10000007382040528 0.31000000371226893 0.10199984850715899 0.022999889371122236 0.0050000595650754173
281 0.21000000318197135 0.24999994797583083 0.10000005796143702 0.31000000468831079 0.10199999340515975 0.02299992458200726 0.005000068205283017
291 0.21000003070352388 0.24999997614991259 0.10000006304163929 0.31000000437564929 0.10199994698907894 0.022999913302684732 0.0050000654375114001
```

- Line 1: See [Work time frame](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#work-time-frame-en)
- Lines 2-21: See [Geographic data](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#geo-data-en)
- Lines 22-27: See [Workers](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#worker-en)
- Lines 28-46: See [Jobs](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#job-en)
- Lines 47-55: See [Weather](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#weather-en)
- Line 56: See [Schedule](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#schedule-en)
- Lines 57-86: Weather forecast data at beginning ($t=1$) (See [Weather forecasts](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#weather-forecast-en) in Input 2).

## Output 1

After receiving this data, the contestant must select the jobs they will accept and produce output in the following format:

> $N^{\text{selected}}\,\, \text{id}_1\,\, \text{id}_2\,\,\cdots \,\,\text{id}_{N^{\text{selected}}}$

(Insert a line-break after the last line)

### Accepting Jobs

- **Output**-   - On the first line, output the number of jobs accepted, $N^{\text{selected}}$, and a list of IDs for the jobs accepted, $\text{id}_1\,\, \text{id}_2\,\,\cdots \,\,\text{id}_{N^{\text{selected}}}$.

Not meeting the following conditions will result in `WA` (Wrong Answer).

- $N^{\text{selected}} \geq 0$
- The length of the job ID list must be $N^{\text{selected}}$.
- All job IDs specified must correspond to jobs that exist.
- There is no duplicate in the job IDs specified.
- All mandatory jobs (having $f^\text{mandatory}=1$) must be included.
- For all selected jobs, if they are dependent on 1 or more jobs, those jobs must also be selected.

Output example

> 4 6 2 3 4

- The contestant accepted `4` jobs. The IDs of the accepted jobs are `6`,`2`,`3`,`4`($N^{\text{selected}}=4,\text{id}_1=6,\text{id}_2=2,\text{id}_3=3,\text{id}_4=4$).

## Input 2 (for each time point)

If output 1 is completed correctly, input and output for each time point begins. It begins with time $t=1$, and time advances by $1$ each time the process of this problem reaches Input 2 thereafter.

For each time point, the following input is given in the format indicated below:

1. Current weather
2. Accepted job data
3. Worker current location
4. Weather forecasts(for each $T^\text{weather}$ time period)

> $w\\
> 
> N^\text{selected}\\
> 
> {\rm{id}}^{\rm{job}}_1\,\, n^{\rm{rest}}_1\\
> 
> \vdots\\
> 
> {\rm{id}}^{\rm{job}}_{N^\text{selected}}\,\, n^{\rm{rest}}_{N^\text{selected}}\\
> 
> {\rm{id}}^{\rm{worker}}_1\,\, u_1\,\, v_1\,\, d^{\rm{from\_u}}_1\\
> 
> \vdots\\
> 
> {\rm{id}}^{\rm{worker}}_{N_{\rm{worker}}}\,\, u_{N_{\rm{worker}}}\,\, v_{N_{\rm{worker}}}\,\, d^{\rm{from\_u}}_{N_{\rm{worker}}}$

Weather forecasts are given on standard input in the following format, **&lt;font color="#DC143C"&gt;for each $T^\text{weather}$ time period (in other words, only when time $t$ satisfies $(t-1) \mod T^\text{weather} = 0$)&lt;/font&gt;**.

> $t_1\,\, p^1_1\,\, p^1_2\,\, \cdots \,\, p^1_{N^{\rm{weather}}}\\
> 
> t_2\,\, p^2_1\,\, p^2_2\,\, \cdots \,\, p^2_{N^{\rm{weather}}}\\
> 
> \vdots\\
> 
> t_{N'}\,\, p^{N'}_1\,\, p^{N'}_2\,\, \cdots \,\, p^{N'}_{N^{\rm{weather}}}$

### Current Weather

- **Input**-   - The current weather, $w \in \{1,\cdots,N_\text{weather}\}$is given on the first line.

Input example

> 4

- Line 1: The weather state at time $t$ is `4`($w=4$).

### Job State

The following input data is given regarding accepted jobs.

- **Input**-   - The number of jobs accepted, $N^\text{selected}$, is given on the next line.
-   - The state of each job is given on the next $N^\text{selected}$ lines. This includes:-   -   - Job ID:${\text{id}}^{\text{job}}_i$
-   -   - The number of tasks remaining:$n^{\text{rest}}_i$
-   - for $1 \leq i \leq N^\text{selected}$.

Input example

> 4
> 
> 2 905
> 
> 3 1052
> 
> 4 653
> 
> 6 737

- Line 1: The number of jobs the contestant accepted is `4` ($N^\text{selected}=4$).
- Line 2: The contestant accepted the job with ID=`2`, which has `905` tasks remaining.
- Line 3: The contestant accepted the job with ID=`3`, which has `1052` tasks remaining.
- Line 4: The contestant accepted the job with ID=`4`, which has `653` tasks remaining.
- Line 5: The contestant accepted the job with ID=`6`, which has `737` tasks remaining.

### Worker Current Locations

- **Input**-   - The following $N_\text{worker}$ lines give worker data:-   -   - Worker ID:$\text{id}^\text{worker}$
-   -   - The vertex indices for the both ends of the edge that the worker is on: $u,v$
-   -   - The worker’s distance from vertex $u$: $d^\text{from\_u}$

Note that when the worker is not on an edge but a vertex, supposing that the vertex is $w$, then $u=v=w$ and $d^\text{from\_u}=0$ will be satisified.

Input example

> 1 6 6 0
> 
> 2 13 4 1
> 
> 3 10 4 1
> 
> 4 9 9 0
> 
> 5 9 9 0

- Line 1: The worker with ID=`1` is at vertex `6`($\text{id}^\text{worker}_1=1,u_1=6,v_1=6,d_1=0$).
- Line 2: The worker with ID=`2` is on the edge connecting vertices `13` and `4`, and is `1` unit distance away from vertex `13`($\text{id}^\text{worker}_2=2,u_2=13,v_2=4,d_2=1$)
- Line 3: The worker with ID=`3` is on the edge connecting vertices `10` and `4`, and is `1` unit distance away from vertex `10`($\text{id}^\text{worker}_3=3,u_3=10,v_3=4,d_3=1$)
- Line 4: The worker with ID=`4` is at vertex `9`($\text{id}^\text{worker}_4=4,u_4=9,v_4=9,d_4=0$).
- Line 5: The worker with ID=`5` is at vertex `9`($\text{id}^\text{worker}_5=5,u_5=9,v_5=9,d_5=0$).

### Weather Forecasts

**&lt;font color="#DC143C"&gt;Only when time $t$ satisfies $(t-1) \mod T^\text{weather} = 0$&lt;/font&gt;**, weather forecast data is provided at $T^\text{weather}$ intervals until the end of the work time frame. 

- **Input**-   - Let the integer $N'$ be the number of forecasts after the current time $t$. The next $N'$ lines give data as follows:-   -   - The time $t_i$  and the probabilities for each weather state $p^i_1\,\, p^i_2\,\, \cdots \,\, p^i_{N^{\text{weather}}}$ at time $t_i$ , as of the current time ($1\leq i \leq N'$).

Note that $t_i=t+(i-1)\times T^{\text{weather}},N'= (T_{\text{max}}-(t-1))/T^{\text{weather}}$.

Input example
The following is an example of weather forecast data for $T_\text{max}=300,T^{\text{weather}}=10,N^{\text{weather}}=7$, at time `231`.

> 231 0 0 0 1 0 0 0
> 
> 241 0.14018451203740215 0.1989275695057979 0.11416680823055275 0.47491922909498718 0.055436150269510279 0.013776723318683931 0.0025890075430656636
> 
> 251 0.09280720088264463 0.12786225388899222 0.075541159856700776 0.2940084286639329 0.3187308679757298 0.073782875285869701 0.017267213446130077
> 
> 261 0.13618507866780669 0.1738477285644548 0.085600288742176719 0.30613029252196533 0.23136324103370096 0.054225695397813925 0.012647675072081671
> 
> 271 0.22147567372764859 0.26151152419242735 0.10180524115884333 0.30797314144503296 0.084544670039893785 0.018734568743877168 0.0039551806922769701
> 
> 281 0.21773018584216544 0.25781470723187322 0.10129611879665416 0.30911960619088807 0.089756375035668315 0.020014729744938529 0.0042682771578124723
> 
> 291 0.21391908801649892 0.25399316678508993 0.10069857638866596 0.30980462878477455 0.095541376935105796 0.021428548707005373 0.0046146143828596133

- Line 1: At time `231`, the probability that the weather state is $1$ is `0`, for $2$ it is `0`, for $3$ it is `0`, for $4$ it is `1`, for $5$ it is `0`, for $6$ it is `0`, and for $7$ it is `0`.
- Line 2: At time `241`, the probability that the weather state is $1$ is `0.14018451203740215`, for $2$ it is `0.1989275695057979`, for $3$ it is `0.11416680823055275`, for $4$ it is `0.47491922909498718`, for $5$ it is `0.055436150269510279`, for $6$ it is `0.013776723318683931`, and for $7$ it is `0.0025890075430656636`.
- Line 3: At time `251`, the probability that the weather state is $1$ is `0.09280720088264463`, for $2$ it is `0.12786225388899222`, for $3$ it is `0.075541159856700776`, for $4$ it is `0.2940084286639329`, for $5$ it is `0.3187308679757298`, for $6$ it is `0.073782875285869701`, and for $7$ it is `0.017267213446130077`.
- Line 4: At time `261`, the probability that the weather state is $1$ is `0.13618507866780669`, for $2$ it is `0.1738477285644548`, for $3$ it is `0.085600288742176719`, for $4$ it is `0.30613029252196533`, for $5$ it is `0.23136324103370096`, for $6$ it is `0.054225695397813925`, and for $7$ it is `0.012647675072081671`.
- Line 5: At time `271`, the probability that the weather state is $1$ is `0.22147567372764859`, for $2$ it is `0.26151152419242735`, for $3$ it is `0.10180524115884333`, for $4$ it is `0.30797314144503296`, for $5$ it is `0.084544670039893785`, for $6$ it is `0.018734568743877168`, and for $7$ it is `0.0039551806922769701`.
- Line 6: At time `281`, the probability that the weather state is $1$ is `0.21773018584216544`, for $2$ it is `0.25781470723187322`, for $3$ it is `0.10129611879665416`, for $4$ it is `0.30911960619088807`, for $5$ it is `0.089756375035668315`, for $6$ it is `0.020014729744938529`, and for $7$ it is `0.0042682771578124723`.
- Line 7: At time `291`, the probability that the weather state is $1$ is `0.21391908801649892`, for $2$ it is `0.25399316678508993`, for $3$ it is `0.10069857638866596`, for $4$ it is `0.30980462878477455`, for $5$ it is `0.095541376935105796`, for $6$ it is `0.021428548707005373`, and for $7$ it is `0.0046146143828596133`.

## Output 2 (for each time point)

For the above, the contestant must produce the following on standard output:

1. A schedule for each worker
2. An action for each worker

Data must be output in the following format.

```plain
$N_\text{schedule}\\
\text{id}_1\,\,\text{id}_2\,\,\cdots\,\,\text{id}_{N_\text{schedule}}\\
\text{job}^{\text{id}_1}_t\,\,\text{job}^{\text{id}_1}_{t+1}\,\,\cdots\,\,\text{job}^{\text{id}_1}_{T_\text{max}}\\
\vdots\\
\text{job}^{\text{id}_{N_\text{schedule}}}_t\,\,\text{job}^{\text{id}_{N_\text{schedule}}}_{t+1}\,\,\cdots\,\,\text{job}^{\text{id}_{N_\text{schedule}}}_{T_\text{max}}\\
{\rm{action}}_1\\
{\rm{action}}_2\\
\vdots\\
{\rm{action}}_{N_{\rm{worker}}}$
```

(Insert a line-break after the last line)

### Schedule submission

The job performance schedule for each worker is maintained in the form of a job ID for each time point.

The contestant must submit schedules for all workers at time $t=1$. At any time after that, schedules for only the workers that require changes can be resubmitted.

- <p>**Output**</p>
-   - On the first line, output the number of workers requiring schedule changes, $N_\text{schedule}$.
-   - On the next line, output the IDs of the workers, $\text{id}_1\,\,\text{id}_2\,\,\cdots\,\,\text{id}_{N_\text{schedule}}$.
-   - On the next $N_\text{schedule}$ lines, output the schedule (the ID of the job to be performed on each time point) for the worker with ID=$\text{id}_i$, from the current time $t$ till $T_\text{max}$, $\text{job}^{\text{id}_i}_t\,\,\text{job}^{\text{id}_i}_{t+1}\,\,\cdots\,\,\text{job}^{\text{id}_i}_{T_\text{max}}$($1\leq i \leq N_\text{schedule}$).
- <p>Not meeting the following conditions will result in `WA` (Wrong Answer).</p>
-   - $N_\text{schedule} \geq 0$
-   - The length of the worker ID list must be $N_\text{schedule}$
-   - There must be a corresponding worker for every worker ID specified.
-   - Worker IDs must not be duplicated.
-   - Suppose that the submission time is $t$, the number of job IDs specified in the schedules must be $T_\text{max}-t+1$.
-   - Only if time $t=1$: $N_\text{schedule} = N_\text{worker}$

When a schedule is resubmitted, the amount of scheduling additional points will be reduced by an amount dependent on the degree of the change (See [Schedule added points](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#schedule-added-point-en)).

### Worker Actions

The contestant must specify $\text{action}$s for all workers at every time point. $\text{action}$s are represented in the form of text strings, and there are three types.

- `stay`:Neither move, nor perform a job, staying at the current location.
- `move w`:Move a distance of $1$ along the shortest path from the current position to the vertex which corresponds to vertex index `w`. If the following constraints are not satisfied, it will result in `WA`(Wrong Answer). -   - A vertex corresponding to vertex index `w` must exist.
-   - The current position must not be vertex `w`.
- `execute i a`:Perform the task for the job with ID=`i`, `a` times. If the following constraints are not satisfied, it will result in `WA`(Wrong Answer).-   - The job with ID=`i` must be among the jobs accepted.
-   - The worker’s current position must be the same as the location of the job with ID=`i`.
-   - The type of the job with ID=`i` must be included in the job types that the worker can perform.
-   - `a` must be an integer greater than or equal to 1.
-   - `a` must not exceed the amount of remaining tasks for the job with ID=`i`.
-   - `a` must not exceed limits on the number of tasks performed (See [Limits on tasks performed](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#task-limit-en) for details).
-   - The jobs on which the job with ID=`i` depends must have been completed.
-   - The reward value must be positive.

For `move w`, if there are 2 or more different shortest paths between the current location and vertex `w`, how to select one is not specified. In such cases, the contestant can choose the desired path by repeatedly selecting and moving to points along the path.

Specifying an $\text{action}$ string that does not match any of the patterns above will result in `WA`(Wrong Answer).

Also, if there exist some jobs whose total task amount processed exceeds its No. of tasks to complete $N^{\text{task}}_i$, it will result in `WA` or `RE`.

- **Output**-   - For the following $N_\text{worker}$ lines, output the actions, $\text{action}_i$, for each worker, where $1 \leq i \leq N_\text{worker}$.

Output example
The following is an example for $N_\text{worker}=3,T_\text{max}=10$

### Example 1:Actions + Initial schedule submission ($t=1$)

```plain
3
1 2 3
85 85 85 85 431 431 431 431 431 431
65 65 65 65 65 65 65 65 65 65
730 730 639 639 639 639 4 4 4 4
execute 85 135
move 12
move 98
```

- Line 1: Contestant is submitting schedules for `3` workers.
- Line 2: The applicable workers have ID=`1`,`2`,`3`.
- Line 3: This is the schedule for the first worker specified on Line 2 (ID=`1`), as follows:-   - At time $1$ perform job with ID=`85`. Similarly at time $2$ ID=`85`, at time $3$ ID=`85`, at time $4$ ID=`85`, at time $5$ ID=`431`, at time $6$ ID=`431`, at time $7$ ID=`431`, at time $8$ ID=`431`, at time $9$ ID=`431`, and at time $10$ ID=`431`.
- Line 4: This is the schedule for the first worker specified on Line 2 (ID=`2`), as follows:-   - At time $1$ perform job with ID=`65`. Similarly at time $2$ ID=`65`, at time $3$ ID=`65`, at time $4$ ID=`65`, at time $5$ ID=`65`, at time $6$ ID=`65`, at time $7$ ID=`65`, at time $8$ ID=`65`, at time $9$ ID=`65`, and at time $10$ ID=`65`.
- Line 5: This is the schedule for the first worker specified on Line 2 (ID=`3`), as follows:-   - At time $1$ perform job with ID=`730`. Similarly at time $2$ ID=`730`, at time $3$ ID=`639`, at time $4$ ID=`639`, at time $5$ ID=`639`, at time $6$ ID=`639`, at time $7$ ID=`4`, at time $8$ ID=`4`, at time $9$ ID=`4`, and at time $10$ ID=`4`.
- Line 6: Specify the action for the worker with ID=1 for the current time: Perform `135` tasks of the job with ID=`85`.
- Line 7: Specify the action for the worker with ID=2 for the current time: Move toward vertex `12`.
- Line 8: Specify the action for the worker with ID=3 for the current time: Move toward vertex `98`.

### Example 2: Actions + no schedule changes

```plain
0

stay
move 87
execute 670 40
```

- Line 1: Contestant is submitting schedules for 0 workers (i.e., no schedule changes).
- Line 2: There are no applicable workers, so this line has 0 worker IDs (it is a blank line).
- (Missing lines: No worker schedules are output, so no lines are output.)
- Line 3: Specify the action for the worker with ID=1 for the current time: Do nothing.
- Line 4: Specify the action for the worker with ID=2 for the current time: Move toward vertex `87`.
- Line 5: Specify the action for the worker with ID=3 for the current time: Perform `40` tasks of the job with ID=`670`.

### Example 3: Actions + schedule changes ($t=6$)

```plain
2
2 3
65 65 65 65 223
639 4 4 91 91
execute 431 80
execute 65 40
move 9
```

- Line 1: Contestant is submitting schedule changes for `2` workers.
- Line 2: The applicable workers have ID=`2`,`3`.
- Line 3: This is the schedule for the first worker specified on Line 2 (ID=`2`), as follows:-   - At time $6$ perform job with ID=`65`. Similarly at time $7$ ID=`65`, at time $8$ ID=`65`, at time $9$ ID=`65`, and at time $10$ ID=`431`.
- Line 4: This is the schedule for the second worker specified on Line 2 (ID=`3`), as follows:-   - At time $6$ perform job with ID=`639`. Similarly at time $7$ ID=`4`, at time $8$ ID=`4`, at time $9$ ID=`91`, and at time $10$ ID=`91`.
- Line 5: Specify the action for the worker with ID=1 for the current time. Perform `80` tasks of the job with ID=`431`.
- Line 6: Specify the action for the worker with ID=2 for the current time. Perform `40` tasks of the job with ID=`65`.
- Line 7: Specify the action for the worker with ID=3 for the current time. Move toward vertex `9`.

## Input 3 (Scoring)

After completing [Output 2](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#output2-en) at time $t=T_\text{max}$, if the output is valid, the score $S$ is given on standard input in the following format.

```plain
$S$
```

If the contestant does not read this value from standard input, it may result in `TLE`.

For details on ranking method, see [Ranking method](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#ranking-method-en)

### Scoring Method

The score $S$ is derived from the total reward $R$, the unfinished penalty $U$, and the scheduling added points $A$ according to the following formula.

$S=\left\lfloor R \times U \times (1+\alpha A) \right\rfloor$

Note that $\left\lfloor x \right\rfloor$ represents the floor function, which returns the greatest integer less than or equal to $x$.

$\sim$

Definitions of $R$, $U$ and $A$ are as follows.

**Total reward amount**:

$\begin{aligned}
R=\sum_{j\in J_\text{finished}}\sum_{w \in W}\sum_{t=1}^{T_\text{max}}a^w_j(t)r_j(t)
\end{aligned}$

- Set of completed jobs:$J_\text{finished}$
- Set of all workers:$W$
- Number of job $j$ tasks performed by worker $w$ at time $t$:$a^w_j(t)$
- The per-task reward for job $j$ at time $t$:$r_j(t)$

**Penalty for not finishing jobs**:

$\begin{aligned}
U=\prod_{j \in J_{\text{unfinished}}} P^{\text{job}}_j
\end{aligned}$

- The set of accepted but not finished jobs:$J_\text{unfinished}$
- Unfinished penalty factor for Job $j$:$P_j^\text{job}$

**Schedule added points**:

The initial value of $A$ is $1.0$ and it is updated in each time interval according to the following rules:

- <p>For each worker:</p>
-   - If the worker performs a job that differs from the schedule: &lt;p style="text-align:center;"&gt;
$\begin{aligned}A\leftarrow 0\end{aligned}$&lt;/p&gt;
-   - If the worker performs the same job as scheduled: &lt;p style="text-align:center;"&gt;
$\begin{aligned}A\leftarrow A\end{aligned}$&lt;/p&gt;
-   - If the worker does not perform a job: &lt;p style="text-align:center;"&gt;
$\begin{aligned}A\leftarrow A\end{aligned}$
&lt;/p&gt;
- <p>If a worker’s schedule is resubmitted at time $t$:</p>
-   - For the job ID at time $s(\geq t)$:-   -   - If it is changed, &amp;lt;p style="text-align:center;"&amp;gt;
$\begin{aligned}A\leftarrow A\times \left(1.0-P_m \times (R_m)^{s-t}\right)\end{aligned}$&amp;lt;/p&amp;gt;
-   -   - If it is not changed, &amp;lt;p style="text-align:center;"&amp;gt;
$\begin{aligned}A\leftarrow A\end{aligned}$&amp;lt;/p&amp;gt;

Note that $A$ is not updated when the initial schedule is submitted.

For an empty set a total sum $\sum$ is $0$, and a total product $\prod$ is $1$.

## Limits on tasks performed

The number of tasks that a worker can perform on one time point is determined by the following, dependent on the **worker’s maximum performable number of tasks $L^\text{max}$**, **the dependency of the job on the weather $d^\text{weather}$**, and **the weather state $w \in \{1,\cdots,N_\text{weather}\}$**.:

$\begin{aligned}
L^\text{max}\times (1-d^\text{weather})^{c_w}\end{aligned}$

Here, $c_w$ are the limit factors given in [Input 1](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#input1-en). Note that $0^0=1$.

## Test Case Generation Rules

Geographical data (graph)

- <p>Terminology</p>
-   - Here, we use the term **partition** for the operation of partitioning a rectangular area, $[x_0,x_1]\times[y_0,y_1]\,\,(x_0&amp;lt;x_1,y_0&amp;lt;y_1)$, in half both vertically and horizontally, into four smaller rectangles.
-   - Specifically, the operation divides the area $[x_0,x_1]\times[y_0,y_1]$ into the following four pieces.-   -   - $[x_0,(x_1+x_0)/2]\times[y_0,(y_0+y_1)/2]$
-   -   - $[x_0,(x_1+x_0)/2]\times[(y_0+y_1)/2,y_1]$
-   -   - $[(x_1+x_0)/2,x_1]\times[y_0,(y_0+y_1)/2]$
-   -   - $[(x_1+x_0)/2,x_1]\times[(y_0+y_1)/2,y_1]$
-   - We also define a function, $\text{Split}(R)$, which performs this operation (giving the above set of regions from a received rectangular region).
- <p>Parameters</p>
-   - Rectangular region size:$L &amp;gt; 0$
-   - Maximum partition depth:$d_\text{max} \in \mathbb{Z}_{\geq 0}$
-   - (Max) number of rectangles:$M$(integer $0$ or greater, $(4^{d_\text{max}+1}-1)/3$ or less)
-   - Distance minimum scale:$s &amp;gt; 0$
-   - Cut area ratio:$C\in (0,1]$
- <p>**Generation procedure 1 **(generate graph)</p>
-   1. Prepare a set of rectangular regions, $U=\{\}$.
-   2. Add rectangular region $R=[0,L]\times[0,L]$ to $U$.
-   3. If $d_\text{max}=0$, proceed to `8.`
-   4. Select a rectangle from $U$ at random and call that rectangle $r$.
-   5. If the area of $r$ is $L^2/4^{d_\text{max}}$, return to `4.`
-   6. Add all elements from $\text{Split}(R)$ to $U$. -   1.    - If these elements are already in $U$, $U$ does not change even if they are added.
-   7. If $|U| &amp;gt; M$is satisfied, proceed to `8.` If not, return to `4.`
-   8. Create a weighted, non-directional graph, $G=(V,E),W:E\rightarrow \mathbb{R}_{ &amp;gt; 0}$, from set $A$, the union of edges of all rectangles in $U$.-   1.    - The set $V$ of vertices in the graph consists of all points where line segments intersect in set $A$, the union of all edges.
-   2.    - The set of edges $E$ in the graph consists of all pairs of vertices $\{a,b\}$, where $a\neq b$ and it is possible to reach $b$ from $a$ on set $A$, the union of all edges, without passing through any other vertex.
-   3.    - The weight $W$ is derived from the Euclidean distances between the points.
-   9. This graph, $G=(V,E)$ (with weight $W$), is used to generate the geographical data.

(Reference:Eisenstat, D., Random road networks: the quadtree model, Proceeding of the 8th Workshop on Analytic Algorithms and Combinatorics (ANALCO), pp.76-84, 2011 (DOI:[https://doi.org/10.1137/1.9781611973013.9](https://doi.org/10.1137/1.9781611973013.9)))

- **Generation procedure 2 **(generate elevations)-   1. Prepare a square region, $R=[0,1024]\times[0,1024]$.
-   2. Divide $R$ by $128$ in both $x$ and $y$ directions (creating $128\times128$ square regions of size $8\times8$).
-   3. Randomly select $20$ of these square regions from $R$ and call the union of them $A$.
-   4. Again, randomly select $20$ of these square regions from $R$ and call the union of them $B$.
-   5. Solve the following partial differential equation discretized by the above dividing operation `2` to time $t=100000$ (in other words, compute $u(100000,x,y)$):
&lt;p style="text-align:center;"&gt;
$\displaystyle
\frac{\partial u}{\partial t}=\Delta u-b(x,y)u+a(x,y)$
&lt;/p&gt;
The initial value at time $t=0$ is $u(0,x,y)=u_0(x,y)\equiv 0$, and we use Neumann boundary conditions. $a(x,y)$ and $b(x,y)$ are defined as follows:&lt;br&gt;
$a(x,y)=\begin{cases}
1/8^2, &amp;amp; \text{if}\ (x,y) \in A, \\
0, &amp;amp; \text{otherwise},
\end{cases}$&lt;br&gt;$b(x,y)=\begin{cases}
1/8^2, &amp;amp; \text{if}\ (x,y) \in B, \\
0, &amp;amp; \text{otherwise}.
\end{cases}$&lt;br&gt;
-   6. Normalize $u(100000,x,y)$ to the range $[0,1]$, and use it as the elevation, $e(x,y)$.
- <p>**Generation procedure 3**(cut the graph, distance scaling)</p>
-   1. &lt;p&gt;Match the elevation data $e(x,y)$ generated in procedure 2 to the size of the graph space, $[0,L]\times[0,L]$.
In other words, define space-scaled elevation $\tilde e(x,y)$, as $\tilde e(x,y)= e(L\times x/1024,L\times y/1024)$.&lt;/p&gt;
-   2. &lt;p&gt;For function $H(z)=\{(x,y) \in [0,L]\times[0,L]|\tilde e(x,y) &amp;gt; z\}$, which returns the parts where $\tilde e(x,y)$ is larger than real value $z$, call the largest value of $z$ for which the area of $H(z)$ is $C\times L^2$ or greater, $h$. &lt;/p&gt;
-   3. For the set of graph edges $E$ generated in generation procedure 1, delete all edges from $E$ where the two vertices on the both ends are below $h$.
-   4. Let the graph $G'=(V',E')$ be the largest connected component of graph $G=(V,E)$.
-   5. Define weight $W':E' \rightarrow \mathbb{R}_{ &amp;gt; 0}:$ as follows:$W'(e)= s\times W(e)/\min_{e' \in E'}W(e')$
-   6. Use the graph $G'=(V',E')$ (with weight $W'$) as the geographical data.

Weather transition probability matrix
Here we describe rules for generating the transition probability matrix with the size of $N^\text{weather}\times N^\text{weather}$ used for weather transitions.

- Parameters-   - The desired stationary distribution for the transition probability matrix:$\bm{s}^\text{sta}=(s^\text{sta}_1,s^\text{sta}_2,\cdots,s^\text{sta}_{N^\text{weather}})$
-   - Bandwidth of the matrix (as a band matrix):$d \geq 1$
-   - Small value for convergence test:$\epsilon &amp;gt; 0$
-   - Maximum loop iterations:$M\geq 1$
-   - Intensity of diagonal component:$q &amp;gt; 0$

$\sim$

1. The $N^\text{weather}\times N^\text{weather}$ matrix $A$ is determined as follows:
<p style="text-align:center;"> Set the element $a_{i,j}$ at row $i$ and column $j$, to $a_{i,j}=\begin{cases}
\exp(-q|i-j|^2), &amp; \text{if}\ |i-j|\leq d,\\
0, &amp; \text{otherwise.}
\end{cases}$</p>
2. Normalize each row of $A$ so that the sum is $1$.
3. Initialize the loop counter:$l=0$
4. $l\leftarrow l + 1$
5. If $l &gt; M$, use $A$ as the transition probability matrix and exit.
6. Compute the stationary distribution $\bm{s}$ of $A$.
7. Set matrix $P$ as follows.:<p style="text-align:center;"> 
Set element $p_{i,j}$ at row $i$ and column $j$ to $p_{i,j}=\begin{cases}
N^\text{weather}||\bm{s}^\text{sta}-\bm{s}||_\infty\max\{\epsilon,a_{i,j}\}\text{rand}(-1,1), &amp; \text{if}\ |i-j|\leq d,\\
0, &amp; \text{otherwise.}
\end{cases}$
</p>
Here, $||\cdot||_\infty$ is the maximum norm, representing the maximum absolute value of the elements. $\text{rand}(a,b)$ represents a random number from the uniform distribution on $[a,b]$. Random numbers are generated when each element is computed.
8. Let the matrix $A'=A+P$
9. Perform the following update on all rows of $A'$. For the $i$-th row:1.    1. Compute $m_i$, the value of the smallest element.
2.    2. If $m_i &amp;lt; 0$, add $-m_i$ to the value of all elements in columns $j$ which satisfy $|i-j|\leq d$.
3.    3. Normalize the row so that the sum equals $1$.
10. For each row in $A'$, if the diagonal component is not the unique maximum component, return to `4.`
11. Compute $\bm{s}'$, the stationary distribution of $A'$.
12. If $||\bm{s}^\text{sta}-\bm{s}||_\infty &gt; ||\bm{s}^\text{sta}-\bm{s'}||_\infty$, update $A$ by substituting $A$ with $A'$.
13. If the both conditions, "$||\bm{s}^\text{sta}-\bm{s'}||_\infty &lt; \epsilon N^\text{weather}$" and "Every element $a_{i,j}$ of $A$ at row $i$ and column $j$ which satisfies $|i-j|\leq d$, is positive.", are satisified, use $A$ as the transition probability matrix and exit. If this is not the case, return to `4.`

Segmented linear function representing reward
For this problem, the function representing reward for each time (more accurately, the reward value per task) is expressed using linear interpolation between a finite number of points. We refer to these points as control points, and the rules for generating this finite number of control points are as follows.

- Parameters-   - Length of section with positive reward:$L\geq 1$
-   - Length for partitioning the interval:$l\geq 1$
-   - Reward standard value:$s &amp;gt; 0$
-   - Standard deviation used when generating control point value:$\sigma' &amp;gt; 0$
-   - Reward upper limit:$M &amp;gt; 0$
-   - Reward lower limit:$m &amp;gt; 0$

$\sim$

1. Let the reward start time be $b=\text{randint}(1,T_\text{max}-L)$, the reward end time be $e=b+L$, and the number of segments be $d=\text{round}(L/l)$. Here, $\text{randint}(m,n)$ is a function that uniformly selects a random integer between m and n inclusive, and $\text{round}(x)$ is a function that returns the value $x$ rounded to the nearest integer.
2. Generate $d+1$ independent random values which follow a log-normal distribution with $\mu=0$ and $\sigma=\sigma'$, and let them be $\{c_i\}_{i=1}^{d+1}$.
3. Define $\{v_i\}_{i=1}^{d+1}$ by $v_i=\prod_{j=1}^{i}c_j$.
4. Let $B=s\sqrt{(d+1)/\sum_{i=1}^{d+1}v_i^2}$, and define $\{r_i\}_{i=1}^{d+1}$ by $r_i=\text{round}(Bv_i)$.
5. If there exists $i$ such that $r_i &gt; M$ or $r_i &lt; m$, return to `2.`
6. Let $t_i=\text{round}(b+(i-1)L/d)$, and use the list of time and reward value pairs $((b-1,0),(t_1,r_1),(t_2,r_2),\cdots,(t_{d+1},r_{d+1}),(e+1,0))$ as the list of control points.

If not otherwise specified, uniform random distributions are used.

## Ranking method

### Provisional test

For the provisional test, $50$ test cases are randomly selected from the ones used for the system test and executed. However, only one test case is selected for one parameter pattern.

The evaluation method is the same as for the system test. See the System test section below.

.testpar{
margin:auto;
border-collapse:unset;
}
.testpar td,.testpar th{
padding:5px;
}

### System test

For the system test, some of the following characteristic parameters are given to satisfy the properties listed in the Remarks column:

FactorCorresponding parameterNo. of typesRemarks

Length of work time frame$T_\text{max}$3short($300$), medium($700$), long($1000$)

Space(Geographical data) size$d_\text{max}$ in the Test Case Generation Rules for Geographical data3small($5$), medium($6$), large($7$)

Number of workers$N_{\text{worker}}$4single($1$), few($2$), moderate($5$), many($10$)

Number of all jobs$N_{\text{job}}$3few($250 \leq N_{\text{job}} \leq 253$), moderate($500 \leq N_{\text{job}} \leq 503$), many($1000 \leq N_{\text{job}} \leq 1003$)

Penalties for not finishing accepted jobs$P^{\text{job}}_i$2small($[0.98,1.0)$), large($[0.91,0.93)$)

Weather volatility$q$ in the Test Case Generation Rules for Weather transition probability matrix 3less($2.0$), moderately($1.5$), highly volatile($1.0$)

Total:648 patterns8 test cases are generated for each pattern

For each pattern of these, $8$ test cases with different seed values are generated, for a total of $3 \times 3 \times4\times 3 \times 2 \times 3 \times 8 = 5184$ test cases.

This is only pattern generation of the parameters in the above table. Apart from this process, data such as geographic information, jobs, etc. are generated for each test case.

Relative evaluation system is used for rankings. For each test case, we compute the relative score $\text{round}(10^{9} \times \frac{\text{YOUR\_SCORE}}{\text{MAX\_SCORE}})$, where $\text{YOUR\_SCORE}$ is your [Score](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#input3-en) and $\text{MAX\_SCORE}$ is the highest score among all competitors obtained on that test case. The score of the submission is the sum of the relative scores.

If your submission produces invalid output or exceeds the time limit for some test cases, only the score for those test cases will be zero.

The system test will be performed only for <font color="red">**the last submission which received a result other than `CE`**</font>. Be careful not to make a mistake in the final submission.

### About Relative Evaluation System

In both the provisional/system test, the standings will be calculated using only the last submission which received a result other than `CE` . Only the last submissions are used to calculate the highest score among all competitors for each test case in calculating the relative scores.

The scores shown in the standings are relative, and whenever a new submission arrives, all relative scores are recalculated. On the other hand, the score for each submission shown on the submissions page is an absolute score obtained by summing up the scores for each test case, and the relative scores are not shown. In order to know the relative score of submission other than the latest one in the current standings, you need to resubmit it. If your submission produces invalid output or exceeds the time limit for some test cases, the absolute score shown in the submissions page becomes 0, but the standings show the sum of the relative scores for the test cases that were answered correctly.

## Constraints

- Character encoding is UTF-8 (although only ASCII characters are used).
- End-of-line code is `LF`(`0x0A`).
- Delimiter is the half-width space (`0x20`)
- Trailing delimiter characters are permitted.

For decimal values, **[Decimal]** is appended.

### Input 1

- $300 \leq T_\text{max} \leq 1000$  and $T_\text{max}$ is a multiple of $100$
- $150\leq N_V\leq 2000$
- $4N_V/3\leq N_E\leq 2 N_V$
- $1\leq u_i,v_i\leq N_V, u_i \neq v_i (1 \leq i \leq N_E)$
- $1\leq d_i \leq 128 (1 \leq i \leq N_E)$
- The graph given is guaranteed to be connected and not contain self-loops or multiple edges.
- $1 \leq N_\text{worker} \leq 10$
- $1\leq v^\text{init}_i \leq N_V (1 \leq i \leq N_\text{worker})$
- $30\leq L^\text{max}_i\leq 100 (1 \leq i \leq N_\text{worker})$
- $1 \leq N^\text{JobType}_i \leq 3 (1 \leq i \leq N_\text{worker})$
- $1\leq \text{Type}^i_j\leq 3 (1 \leq i \leq N_\text{worker},1 \leq j \leq N^\text{JobType}_i)$
- $250 \leq N_\text{job} \leq 1003$
- $\text{ID}^\text{job}_i=i (1 \leq i \leq N_\text{job})$
- $1\leq \text{Type}_i\leq 3$ and $\text{Type}_i$ is included in the processable job types of $1$ or more workers.  $(1 \leq i \leq N_\text{job})$
- $500 \leq N^\text{task}_i \leq 1500(1 \leq i \leq N_\text{job})$
- $1 \leq v^\text{job}_i \leq N_V (1 \leq i \leq N_\text{job})$
- $0.91\leq P^\text{job}_i&lt;1.0 (1 \leq i \leq N_\text{job})$ **[Decimal]**
- $f^\text{mandatory}_i\in\{0,1\}(1 \leq i \leq N_\text{job})$
- $1 \leq N^\text{reward}_i \leq 43 (1 \leq i \leq N_\text{job})$
- $0\leq t^\text{reward}_{i,1}&lt;t^\text{reward}_{i,2}&lt;\cdots&lt;t^\text{reward}_{i,N^\text{reward}_i}\leq T_\text{max}+1(1 \leq i \leq N_\text{job})$
- $y^\text{reward}_{i,1}=y^\text{reward}_{i,N^\text{reward}_i}=0,1 \leq y^\text{reward}_{i,j} \leq 10^7 (1 \leq i \leq N_\text{job},2 \leq j \leq N^\text{reward}_i-1)$
- $0\leq N^\text{depend}_i\leq 3(1 \leq i \leq N_\text{job})$
- $1 \leq \text{id}^\text{depend}_{i,j} \leq N_\text{job},\text{id}^\text{depend}_{i,j} \neq \text{id}^\text{depend}_{i,k},\text{id}^\text{depend}_{i,j}\neq i (1 \leq i \leq N_\text{job},1\leq j \leq N^\text{depend}_i,1\leq k\leq N^\text{depend}_i,j\neq k)$
- Job dependency relationships can be viewed as a directed acyclic graph (which will not necessarily be connected) with each job as a vertex and dependencies between jobs as directed edges, and each connected component having size of $4$ or less.
- $5 \leq T^\text{weather} \leq 20$  and $T^\text{weather}$ divides $T_\text{max}$.
- $N^\text{weather}=7$
- $0.0 \leq p^\text{weather}_{i,j} \leq 1.0,\displaystyle\sum_{k=1}^{N^\text{weather}}p^\text{weather}_{i,k}=1.0(1\leq i \leq N^\text{weather},1 \leq j \leq N^\text{weather})$ **[Decimal]**
- $(c_1,c_2,c_3,c_4,c_5,c_6,c_7) = (0,1,2,3,10,14,20)$
- $0.005 \leq P_m&lt; 0.025$ **[Decimal]**
- $0.97&lt; R_m \leq 0.999$ **[Decimal]** (Note that the distribution of $R_m$ is obtained by applying $f(x)=1.0-0.001 \cdot 30^x$ to random variable $X$ that follows the uniform distribution on $[0,1)$.)
- $0.2 \leq \alpha &lt; 5$ **[Decimal]**  (Note that the distribution of $\alpha$ is obtained by applying $f(x)=5^{-1+2x}$ to random variable $X$ that follows the uniform distribution on $[0,1)$.)
- $0.0 \leq d^\text{weather}_i &lt; 0.15 (1 \leq i \leq N_\text{job})$ **[Decimal]**

### Input 2

- $1 \leq \text{id}_i^\text{job} \leq N_\text{job} (1\leq i\leq N^\text{selected})$
- $0 \leq n^\text{rest}_i \leq N^\text{task}_i (1\leq i\leq N^\text{selected})$
- $0.0 \leq L^\text{weather}_i \leq 1.0(1\leq i\leq N^\text{selected})$ **[Decimal]**
- $\text{id}^\text{worker}_i=i (1\leq i\leq N_\text{worker})$
- $1\leq u_i,v_i\leq N_V (1\leq i\leq N_\text{worker})$
- $0\leq d^\text{from\_u}_i \leq$ $\text{Length of the corresponding edge}$ $(1\leq i\leq N_\text{worker})$
- $u_i=v_i$ if and only if $d^\text{from\_u}_i=0$. $(1\leq i\leq N_\text{worker})$
- Suppose that the time [Input 2](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_b#input2-en) is given at is $t$:-   - $N'= (T_{\text{max}}-(t-1))/T^{\text{weather}}$
-   - $t_i=t+(i-1)\times T^{\text{weather}} (1\leq i \leq N')$
-   - $0.0 \leq p^i_j \leq 1.0,\displaystyle\sum_{k=1}^{N^\text{weather}}p^i_k = 1.0 (1\leq i \leq N')$ **[Decimal]**

### Input 3 (Scoring)

- $0 \leq S \leq 2^{63}-1$

### Geographical data

- $L=2048$
- $d_\text{max}\in\{5,6,7\}$
- $s=1$
- $0.3 \leq C &lt; 0.4$ **[Decimal]**
- $M=\text{round}(0.45(4^{d_\text{max}+1}-1)/(3\times 2^{d_\text{max}-5}))$

### Transition probability matrix

- $\bm{s}^\text{sta}=(0.21,0.25,0.10,0.31,0.102,0.023,0.005)$ **[Decimal]**
- $d=2$
- $\epsilon = 1.0 \times 10^{-8}$ **[Decimal]**
- $M=10^6$
- $1 \leq q \leq 2$ **[Decimal]**

### Segmented linear reward function

- $100 \leq L \leq T_\text{max}$
- $l = 25$
- $10^6 \leq s \leq 2\times 10^6$
- $0.3 \leq \sigma' &lt; 0.38$  **[Decimal]**
- $M = 10^7$
- $m = 1$

### Others

- Seed value for weathers $\in \{0,1,\cdots,2^{64}-1\}$

## Toolkit

A toolkit for this problem can be downloaded from [here](https://img.atcoder.jp/hokudai-hitachi2022/f3c44ba9531996b.zip). It includes the following:

- Judge program (for both A, B)
- Test case generator (both A and B)
- Sample codes (In C++, one each for problems A and B)
- Visualizer

## Visualizer

Log files (in JSON format) generated from the judge program in the toolkit can be used to visualize the results.

The visualizer is included in the toolkit, but is also available [here](https://img.atcoder.jp/hokudai-hitachi2022/wVw8B4mE02x8rJNU.html?en) on the server.

For details, please read the README in the toolkit and the description at the bottom of the visualizer page.