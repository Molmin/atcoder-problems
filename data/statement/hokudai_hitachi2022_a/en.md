Contents

1. [Problem Overview](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_a#problem-overview-en)
2. [Input 1](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_a#input1-en)1.    1. [Work time frame](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_a#work-time-frame-en)
2.    2. [Geographical data](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_a#geo-data-en)
3.    3. [Workers](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_a#worker-en)
4.    4. [Jobs](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_a#job-en)
3. [Output 1](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_a#output1-en)
4. [Input 2 (Scoring)](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_a#input2-en)1.    1. [Scoring method](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_a#scoring-method-en)
5. [Test case generation rules](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_a#testcase-generation-rules-en)
6. [Ranking mehod](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_a#ranking-method-en)
7. [Constraints](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_a#constraints-en)
8. [Toolkit](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_a#toolkit-en)
9. [Visualizer](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_a#visualizer-en)

## Problem Overview

This problem is to maximize utilization of available machinery and personnel (referred to as “workers” for simplicity) for an agricultural equipment sharing service, performing agricultural work (referred to as “jobs”) while maximizing reward*. Instructions to workers for moving and performing work are output, to handle many jobs that are distributed over a space. Each job is composed of multiple “tasks” requiring a specific amount of processing, and is considered complete when workers have processed these tasks. Reward is obtained by completing jobs, but amount of reward depends on when tasks were completed, so the appropriate time-frame for handling each task must be considered. The number of tasks that a worker can handle at a particular time is also dependent on the capabilities of the worker.

*Reward: Assuming factors such as the harvest time for the crops and the rate of renewable energy supplied to agricultural equipment.

![](https://img.atcoder.jp/hokudai-hitachi2022/55d6622c556aaa23cc2186a2820c7bd4.png)
![](https://img.atcoder.jp/hokudai-hitachi2022/e98c45a5d7081e87790e944aa2de72e9.png)

The following data is given as the initial input.

1. Work time frame
2. Geographical data (graph)
3. Worker data
4. All job data

For this input, contestants will produce the following output:

1. Worker actions for all time points in the work time frame.

The total reward obtained for work will be the score.

More detailed description is given below.

## Input 1

The initial input is:

1. Work time frame
2. Geographical data(graph)
3. Worker data
4. All job data

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
\text{Job}_{N_{\rm{job}}}$
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

As described below, [jobs](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_a#job-en) are located on vertices and [workers](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_a#worker-en) move along edges of this graph.

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

Workers are entities that process jobs, and have capabilities to move and to perform tasks. They operate according to input from the contestant (See [Worker actions](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_a#worker-action-en)).

- **Input**-   - The number of workers, $N_{\text{worker}}$, is given on the next line.
-   - &lt;p&gt;
This is followed by $N_{\text{worker}}$ lines with worker configuration data:
&lt;/p&gt;-   -   - Initial position (vertex index): $v^{\text{init}}_i$
-   -   - The maximum tasks the worker can perform per unit time: $L^{\text{max}}_i$
-   -   - Number of job types the worker can perform,  $N^{\text{JobType}}_i$ , and a list of the job types: $\text{Type}^i_1\,\,\text{Type}^i_2\,\,\cdots\,\,\text{Type}^i_{N^{\text{JobType}}_i}$

($1\leq i \leq N_{\text{worker}}$)
&lt;p&gt;&lt;/p&gt;

These inputs are given in order of worker ID.

The upper limit for number of tasks performable per unit time and the types of jobs that can be done are different for each worker.

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
- **Task processing and reward**-   - The tasks for each job are processed by [workers](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_a#worker-en).
-   - The contestant shall output instructions for each worker to **move** and **perform work**, to move them to the vertex of a job and to perform the job’s tasks.
-   - The contestant will receive reward by **&amp;lt;font color="#DC143C"&amp;gt;completing jobs (processing the set number of tasks)&amp;lt;/font&amp;gt;**.
-   - Each worker has a maximum number of tasks they can process per unit time ([$L^{\text{max}}$](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_a#worker)), so completion of a job will take a certain amount of time. Typically, a set number of tasks are processed during each time interval from a set time.
-   - **The amount of reward received when completing a job will depend on the time when tasks were processed**. More specifically, it is the sum for all time intervals ($t=1,2,\cdots,T_\text{max}$), of &lt;p style="text-align:center;"&gt;the product of the reward rate per task processed at that time point $r(t)$ $\times$ the number of that task processed at that time point&lt;/p&gt;
-   - The reward rate, $r(t)$ for processing the task at each time point **is different for each job**.
-   - The total reward collected by all workers will be the main constituent of the score for this problem (Scoring method). Contestants need to decide worker actions to maximize this total reward.
- **Dependencies between jobs**-   - Some jobs are dependent on other jobs. That is, if a job is dependent on another job, its tasks cannot be processed until the tasks of the other job have been completed.
-   - If a job is not dependent on another job, there are no such constraints.

Various constraints

- Tasks cannot be processed during time intervals when reward is not available (when the reward per unit task is zero).

- **Input**-   - The next line gives $N_{\text{job}}$, the number of jobs.
-   - This is followed by lines indicating the composition of each job, $\text{Job}_i$, for the $N_{\text{job}}$ jobs($N_{\text{job}}\times 3$ lines).

The composition of $\text{Job}_i$ is given in the following format:

```plain
$\text{ID}^{\rm{job}}_i\,\,\text{Type}_i\,\,N^{\rm{task}}_i\,\,v^{\rm{job}}_i\\
N^{\rm{reward}}_i\,\, t^{\rm{reward}}_{i,1}\,\, y^{\rm{reward}}_{i,1}\cdots t^{\rm{reward}}_{i,N^{\rm{reward}}_i}\,\, y^{\rm{reward}}_{i,N^{\rm{reward}}_i}\\
N^{\rm{depend}}_i\,\, {\rm{id}}^{\rm{depend}}_{i,1}\,\, \cdots \,\,{\rm{id}}^{\rm{depend}}_{i,N^{\rm{depend}}_i}$
```

- Line 1-   - Job ID: $\text{ID}^{\text{job}}_i$
-   - Job type: $\text{Type}_i$
-   - No. of tasks to complete: $N^{\text{task}}_i$
-   - Job location (vertex index): $v^{\text{job}}_i$
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
The following is an example with $N_{\text{job}}=7$ (Note that this is a very small number of jobs):

```plain
7
1 2 625 8
15 1 0 2 1581724 4 1733369 6 1561173 8 1596919 10 1090320 12 1031662 14 929778 16 1095326 18 665006 20 757205 22 567001 24 600233 26 576475 27 0
0
2 3 993 14
15 2 0 3 1147309 5 1186255 7 1098060 9 836498 11 872163 13 1071865 15 1408708 17 2135395 19 1517111 21 1079036 23 740032 25 904947 27 976790 28 0
1 1
3 2 1310 14
15 2 0 3 992842 5 818304 7 676647 9 859283 11 871992 13 859663 15 1776296 17 3025691 19 1304819 21 1606358 23 3469915 25 2801513 27 3046487 28 0
2 2 1
4 2 1356 13
15 3 0 4 2016014 6 2138183 8 1711305 10 2020927 12 2030686 14 1203758 16 973133 18 1102291 20 954221 22 725869 24 700613 26 604824 28 742452 29 0
0
5 1 1225 10
15 5 0 6 1256998 8 1096984 10 820728 12 818626 14 1089776 16 1014615 18 1062766 20 900374 22 1190773 24 1050656 26 1876847 28 1530806 30 952050 31 0
1 4
6 3 1362 7
15 0 0 1 608492 3 960135 5 961858 7 998014 9 1101543 11 1288452 13 1825126 15 1145645 17 1057616 19 1312087 21 991237 23 1123573 25 882743 26 0
2 7 5
7 1 1307 1
15 5 0 6 299791 8 303708 10 533803 12 879014 14 828842 16 946449 18 991630 20 1551550 22 1499622 24 1793967 26 1425447 28 1732069 30 1207139 31 0
0
```

- Line 1: The total number of jobs is `7`. ($N_{\text{job}}=7$)-   - The actual problem given will consist of several hundreds of jobs.
- Line 2: Start of description for job with ID=1.-   - The job ID is `1` ($\text{ID}^{\text{job}}_1=1$).
-   - The job type is `2` ($\text{Type}_1=2$).
-   - The number of tasks required to complete this job is `625` ($N^{\text{task}}_1=625$).
-   - The job is located at vertex `8` ($v^{\text{job}}_1=8$).
- Line 3: Definition of reward function for the job with ID=1.-   - There are `15` control points ($N^{\text{reward}}_1=15$).
-   - The list of control points is: ((`1`,`0`), (`2`,`1581724`), (`4`,`1733369`), (`6`,`1561173`), (`8`,`1596919`), (`10`,`1090320`), (`12`,`1031662`), (`14`,`929778`), (`16`,`1095326`), (`18`,`665006`), (`20`,`757205`), (`22`,`567001`), (`24`,`600233`), (`26`,`576475`), (`27`,`0`)).-   -   - The times for which reward can be obtained are $2,3,\cdots,26$.
- Line 4: The jobs that the job with ID=1 depends on. This completes the description of the job with ID=1.-   - The number of jobs this job depends on is `0`($N^{\text{depend}}_1=0$).
-   - (Since the number of jobs it depends on is `0`, no job IDs are given.)
- Line 5: Start of description for job with ID=2.-   - The job ID is `2` ($\text{ID}^{\text{job}}_2=2$).
-   - The job type is `3` ($\text{Type}_2=3$).
-   - The number of tasks required to complete this job is `993` ($N^{\text{task}}_2=993$).
-   - The job is located at vertex `14` ($v^{\text{job}}_2=14$).
- Line 6: Definition of reward function for the job with ID=2.-   - There are `15` control points ($N^{\text{reward}}_2=15$).
-   - The list of control points is: ((`2`,`0`), (`3`,`1147309`), (`5`,`1186255`), (`7`,`1098060`), (`9`,`836498`), (`11`,`872163`), (`13`,`1071865`), (`15`,`1408708`), (`17`,`2135395`), (`19`,`1517111`), (`21`,`1079036`), (`23`,`740032`), (`25`,`904947`), (`27`,`976790`), (`28`,`0`)).-   -   - The times for which reward can be obtained are $3,4,\cdots,27$.
- Line 7: The jobs that the job with ID=2 depends on. This completes the description of the job with ID=2.-   - The number of jobs this job depends on is `1`($N^{\text{depend}}_2=1$).
-   - This job depends on the job with ID=`1`($\text{id}^\text{depend}_{2,1}=1$).
- Line 8: Start of description for job with ID=3.-   - The job ID is `3` ($\text{ID}^{\text{job}}_3=3$).
-   - The job type is `2` ($\text{Type}_3=2$).
-   - The number of tasks required to complete this job is `1310` ($N^{\text{task}}_3=1310$).
-   - The job is located at vertex `14` ($v^{\text{job}}_3=14$).
- Line 9: Definition of reward function for the job with ID=3.-   - There are `15` control points ($N^{\text{reward}}_3=15$).
-   - The list of control points is: ((`2`,`0`), (`3`,`992842`), (`5`,`818304`), (`7`,`676647`), (`9`,`859283`), (`11`,`871992`), (`13`,`859663`), (`15`,`1776296`), (`17`,`3025691`), (`19`,`1304819`), (`21`,`1606358`), (`23`,`3469915`), (`25`,`2801513`), (`27`,`3046487`), (`28`,`0`)).-   -   - The times for which reward can be obtained are $3,4,\cdots,27$.
- Line 10: The jobs that the job with ID=3 depends on. This completes the description of the job with ID=3.-   - The number of jobs this job depends on is `2`($N^{\text{depend}}_3=2$).
-   - This job depends on the jobs with ID=`2`,`1`($\text{id}^\text{depend}_{3,1}=2,\text{id}^\text{depend}_{3,2}=1$).
- Line 11: Start of description for job with ID=4.-   - The job ID is `4` ($\text{ID}^{\text{job}}_4=4$).
-   - The job type is `2` ($\text{Type}_4=2$).
-   - The number of tasks required to complete this job is `1356` ($N^{\text{task}}_4=1356$).
-   - The job is located at vertex `13` ($v^{\text{job}}_4=13$).
- Line 12: Definition of reward function for the job with ID=4.-   - There are `15` control points ($N^{\text{reward}}_4=15$).
-   - The list of control points is: ((`3`,`0`), (`4`,`2016014`), (`6`,`2138183`), (`8`,`1711305`), (`10`,`2020927`), (`12`,`2030686`), (`14`,`1203758`), (`16`,`973133`), (`18`,`1102291`), (`20`,`954221`), (`22`,`725869`), (`24`,`700613`), (`26`,`604824`), (`28`,`742452`), (`29`,`0`)).-   -   - The times for which reward can be obtained are $4,5,\cdots,28$.
- Line 13: The jobs that the job with ID=4 depends on. This completes the description of the job with ID=4.-   - The number of jobs this job depends on is `0`($N^{\text{depend}}_4=0$).
-   - (Since the number of jobs it depends on is `0`, no job IDs are given.)
- Line 14: Start of description for job with ID=5.-   - The job ID is `5` ($\text{ID}^{\text{job}}_5=5$).
-   - The job type is `1` ($\text{Type}_5=1$).
-   - The number of tasks required to complete this job is `1225` ($N^{\text{task}}_5=1225$).
-   - The job is located at vertex `10` ($v^{\text{job}}_5=10$).
- Line 15: Definition of reward function for the job with ID=5.-   - There are `15` control points ($N^{\text{reward}}_5=15$).
-   - The list of control points is: ((`5`,`0`), (`6`,`1256998`), (`8`,`1096984`), (`10`,`820728`), (`12`,`818626`), (`14`,`1089776`), (`16`,`1014615`), (`18`,`1062766`), (`20`,`900374`), (`22`,`1190773`), (`24`,`1050656`), (`26`,`1876847`), (`28`,`1530806`), (`30`,`952050`), (`31`,`0`)).-   -   - The times for which reward can be obtained are $6,7,\cdots,30$.
- Line 16: The jobs that the job with ID=5 depends on. This completes the description of the job with ID=5.-   - The number of jobs this job depends on is `1`($N^{\text{depend}}_5=1$).
-   - This job depends on the job with ID=`4`($\text{id}^\text{depend}_{5,1}=4$).
- Line 17: Start of description for job with ID=6.-   - The job ID is `6` ($\text{ID}^{\text{job}}_6=6$).
-   - The job type is `3` ($\text{Type}_6=3$).
-   - The number of tasks required to complete this job is `1362` ($N^{\text{task}}_6=1362$).
-   - The job is located at vertex `7` ($v^{\text{job}}_6=7$).
- Line 18: Definition of reward function for the job with ID=6.-   - There are `15` control points ($N^{\text{reward}}_6=15$).
-   - The list of control points is: ((`0`,`0`), (`1`,`608492`), (`3`,`960135`), (`5`,`961858`), (`7`,`998014`), (`9`,`1101543`), (`11`,`1288452`), (`13`,`1825126`), (`15`,`1145645`), (`17`,`1057616`), (`19`,`1312087`), (`21`,`991237`), (`23`,`1123573`), (`25`,`882743`), (`26`,`0`)).-   -   - The times for which reward can be obtained are $1,2,\cdots,25$.
- Line 19: The jobs that the job with ID=6 depends on. This completes the description of the job with ID=6.-   - The number of jobs this job depends on is `2`($N^{\text{depend}}_6=2$).
-   - This job depends on the jobs with ID=`7`,`5`($\text{id}^\text{depend}_{6,1}=7,\text{id}^\text{depend}_{6,2}=5$).
- Line 20: Start of description for job with ID=7.-   - The job ID is `7` ($\text{ID}^{\text{job}}_7=7$).
-   - The job type is `1` ($\text{Type}_7=1$).
-   - The number of tasks required to complete this job is `1307` ($N^{\text{task}}_7=1307$).
-   - The job is located at vertex `1` ($v^{\text{job}}_7=1$).
- Line 21: Definition of reward function for the job with ID=7.-   - There are `15` control points ($N^{\text{reward}}_7=15$).
-   - The list of control points is: ((`5`,`0`), (`6`,`299791`), (`8`,`303708`), (`10`,`533803`), (`12`,`879014`), (`14`,`828842`), (`16`,`946449`), (`18`,`991630`), (`20`,`1551550`), (`22`,`1499622`), (`24`,`1793967`), (`26`,`1425447`), (`28`,`1732069`), (`30`,`1207139`), (`31`,`0`)).-   -   - The times for which reward can be obtained are $6,7,\cdots,30$.
- Line 22($=1+3\times N_{\text{job}}$): The jobs that the job with ID=7 depends on. This completes the description of the job with ID=7.-   - The number of jobs this job depends on is `0`($N^{\text{depend}}_7=0$).
-   - (Since the number of jobs it depends on is `0`, no job IDs are given.)

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
7
1 2 625 8
15 1 0 2 1581724 4 1733369 6 1561173 8 1596919 10 1090320 12 1031662 14 929778 16 1095326 18 665006 20 757205 22 567001 24 600233 26 576475 27 0
0
2 3 993 14
15 2 0 3 1147309 5 1186255 7 1098060 9 836498 11 872163 13 1071865 15 1408708 17 2135395 19 1517111 21 1079036 23 740032 25 904947 27 976790 28 0
1 1
3 2 1310 14
15 2 0 3 992842 5 818304 7 676647 9 859283 11 871992 13 859663 15 1776296 17 3025691 19 1304819 21 1606358 23 3469915 25 2801513 27 3046487 28 0
2 2 1
4 2 1356 13
15 3 0 4 2016014 6 2138183 8 1711305 10 2020927 12 2030686 14 1203758 16 973133 18 1102291 20 954221 22 725869 24 700613 26 604824 28 742452 29 0
0
5 1 1225 10
15 5 0 6 1256998 8 1096984 10 820728 12 818626 14 1089776 16 1014615 18 1062766 20 900374 22 1190773 24 1050656 26 1876847 28 1530806 30 952050 31 0
1 4
6 3 1362 7
15 0 0 1 608492 3 960135 5 961858 7 998014 9 1101543 11 1288452 13 1825126 15 1145645 17 1057616 19 1312087 21 991237 23 1123573 25 882743 26 0
2 7 5
7 1 1307 1
15 5 0 6 299791 8 303708 10 533803 12 879014 14 828842 16 946449 18 991630 20 1551550 22 1499622 24 1793967 26 1425447 28 1732069 30 1207139 31 0
0
```

- Line 1: See [Work time frame](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_a#work-time-frame-en)
- Lines 2-21: See [Geographic data](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_a#geo-data-en)
- Lines 22-27: See [Workers](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_a#worker-en)
- Lines 28-46: See [Jobs](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_a#job-en)

## Output 1

Given the data described above, the contestant must produce output for all workers in each time interval in the following format.

```plain
$\text{Actions}_1\\
\vdots\\
\text{Actions}_{T_\text{max}}$
```

(Insert a line-break after the last line)

Here, $\text{Actions}_i$ represents the actions for all workers at time $i$, and is represented as follows, given that $\text{action}^i_j$ represents the action of worker $j$ at time $i$.

```plain
$\text{action}^i_1\\
\text{action}^i_2\\
\vdots\\
\text{action}^i_{N_{\text{worker}}}$
```

### Worker Actions

- `stay`:Neither move, nor perform a job, staying at the current location.
- `move w`:Move a distance of $1$ along the shortest path from the current position to the vertex which corresponds to vertex index `w`. If the following constraints are not satisfied, it will result in `WA`(Wrong Answer). -   - A vertex corresponding to vertex index `w` must exist.
-   - The current position must not be vertex `w`.
- `execute i a`:Perform the task for the job with ID=`i`, `a` times. If the following constraints are not satisfied, it will result in `WA`(Wrong Answer).-   - The worker’s current position must be the same as the location of the job with ID=`i`.
-   - The type of the job with ID=`i` must be included in the job types that the worker can perform.
-   - `a` must be an integer greater than or equal to 1.
-   - `a` must not exceed the amount of remaining tasks for the job with ID=`i`.
-   - `a` must not exceed $L^\text{max}_i$, the upper limit for number of tasks the worker can perform.
-   - The jobs on which the job with ID=`i` depends must have been completed.
-   - The reward value must be positive.

For `move w`, if there are 2 or more different shortest paths between the current location and vertex `w`, how to select one is not specified. In such cases, the contestant can choose the desired path by repeatedly selecting and moving to points along the path.

Specifying an $\text{action}$ string that does not match any of the patterns above will result in `WA`(Wrong Answer).

Also, if there exist some jobs whose total task amount processed exceeds its No. of tasks to complete $N^{\text{task}}_i$, it will result in `WA` or `RE`.

- **Output**-   - For the following $N_\text{worker}\times T_\text{max}$ lines, output the actions, $\text{action}^i_j$, for each worker, where $1 \leq i \leq T_\text{max}$ and $1 \leq j \leq N_\text{worker}$.

Output example
The following is an example with $T_\text{max}=30,N_\text{worker}=5$:

```plain
move 8
stay
move 13
stay
stay
execute 1 100
stay
move 13
stay
stay
execute 1 100
stay
move 13
move 1
stay
execute 1 100
stay
move 13
move 1
stay
execute 1 100
stay
move 13
move 1
stay
execute 1 100
stay
move 13
execute 7 47
stay
execute 1 100
stay
execute 4 55
execute 7 47
stay
execute 1 25
move 14
execute 4 55
execute 7 47
stay
stay
move 14
execute 4 55
execute 7 47
stay
stay
move 14
execute 4 55
execute 7 47
stay
stay
move 14
execute 4 55
execute 7 47
stay
stay
move 14
execute 4 55
execute 7 47
stay
stay
move 14
execute 4 55
execute 7 47
stay
stay
execute 2 59
execute 4 55
execute 7 47
stay
stay
execute 2 59
execute 4 55
execute 7 47
stay
stay
execute 2 59
execute 4 55
execute 7 47
stay
stay
execute 2 59
execute 4 55
execute 7 47
stay
stay
execute 2 59
execute 4 55
execute 7 47
stay
stay
execute 2 59
execute 4 55
execute 7 47
stay
stay
execute 2 59
execute 4 55
execute 7 47
stay
stay
execute 2 59
execute 4 55
execute 7 47
stay
stay
execute 2 59
execute 4 55
execute 7 47
stay
stay
execute 2 59
execute 4 55
execute 7 47
stay
stay
execute 2 59
execute 4 55
execute 7 47
stay
stay
execute 2 59
execute 4 55
execute 7 47
stay
stay
execute 2 59
execute 4 55
execute 7 47
stay
stay
execute 2 59
execute 4 55
execute 7 47
stay
stay
stay
execute 4 55
execute 7 47
stay
stay
stay
stay
execute 7 47
stay
stay
stay
stay
execute 7 47
stay
```

- Lines 1-5: Specify the actions for all workers at time $1$. -   - Line 1:This worker (ID=1) moves from its current position toward vertex `8`.
-   - Line 2:This worker (ID=2) stays where it is without performing a job or moving.
-   - Line 3:This worker (ID=3) moves from its current position toward vertex `13`.
-   - Line 4:This worker (ID=4) stays where it is without performing a job or moving.
-   - Line 5:This worker (ID=5) stays where it is without performing a job or moving.
- Lines 6-10: Specify the actions for all workers at time $2$. -   - Line 6:This worker (ID=1) performs the task for the job with ID=`1` at its current location `100` times.
-   - Line 7:This worker (ID=2) stays where it is without performing a job or moving.
-   - Line 8:This worker (ID=3) moves from its current position toward vertex `13`.
-   - Line 9:This worker (ID=4) stays where it is without performing a job or moving.
-   - Line 10:This worker (ID=5) stays where it is without performing a job or moving.
- Lines 11-145 omitted.
- Lines 146-150: Specify the actions for all workers at time $30$. -   - Line 146:This worker (ID=1) stays where it is without performing a job or moving.
-   - Line 147:This worker (ID=2) stays where it is without performing a job or moving.
-   - Line 148:This worker (ID=3) stays where it is without performing a job or moving.
-   - Line 149:This worker (ID=4) performs the task for the job with ID=`7` at its current location `47` times.
-   - Line 150:This worker (ID=5) stays where it is without performing a job or moving.

## Input 2 (Scoring)

If [Output 1](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_a#output1-en) is valid, input of score $S$ is given on the standard input in the format below.

> $S$

If the contestant does not read this value from standard input, it may result in `TLE`.

For details on ranking method, see [Ranking method](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_a#ranking-method-en)

### Scoring Method

Score, $S$ is determined by the following formula.

$\begin{aligned}
S=\left\lfloor\sum_{j\in J_\text{finished}}\sum_{w \in W}\sum_{t=1}^{T_\text{max}}a^w_j(t)r_j(t)\right\rfloor
\end{aligned}$

- Set of completed jobs:$J_\text{finished}$
- Set of all workers:$W$
- Number of job $j$ tasks performed by worker $w$ at time $t$:$a^w_j(t)$
- The per-task reward for job $j$ at time $t$:$r_j(t)$

Note that $\left\lfloor x \right\rfloor$ represents the floor function, which returns the greatest integer less than or equal to $x$.

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

Total:108 patterns40 test cases are generated for each pattern

For each pattern of these, $40$ test cases with different seed values are generated, for a total of $3 \times 3 \times4\times 3 \times 40 = 4320$ test cases.

This is only pattern generation of the parameters in the above table. Apart from this process, data such as geographic information, jobs, etc. are generated for each test case.

Relative evaluation system is used for rankings. For each test case, we compute the relative score $\text{round}(10^{9} \times \frac{\text{YOUR\_SCORE}}{\text{MAX\_SCORE}})$, where $\text{YOUR\_SCORE}$ is your [Score](https://atcoder.jp/contests/hokudai-hitachi2022/tasks/hokudai_hitachi2022_a#input2-en) and $\text{MAX\_SCORE}$ is the highest score among all competitors obtained on that test case. The score of the submission is the sum of the relative scores.

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
- $1 \leq N^\text{reward}_i \leq 43 (1 \leq i \leq N_\text{job})$
- $0\leq t^\text{reward}_{i,1}&lt;t^\text{reward}_{i,2}&lt;\cdots&lt;t^\text{reward}_{i,N^\text{reward}_i}\leq T_\text{max}+1(1 \leq i \leq N_\text{job})$
- $y^\text{reward}_{i,1}=y^\text{reward}_{i,N^\text{reward}_i}=0,1 \leq y^\text{reward}_{i,j} \leq 10^7 (1 \leq i \leq N_\text{job},2 \leq j \leq N^\text{reward}_i-1)$
- $0\leq N^\text{depend}_i\leq 3(1 \leq i \leq N_\text{job})$
- $1 \leq \text{id}^\text{depend}_{i,j} \leq N_\text{job},\text{id}^\text{depend}_{i,j} \neq \text{id}^\text{depend}_{i,k},\text{id}^\text{depend}_{i,j}\neq i (1 \leq i \leq N_\text{job},1\leq j \leq N^\text{depend}_i,1\leq k\leq N^\text{depend}_i,j\neq k)$
- Job dependency relationships can be viewed as a directed acyclic graph (which will not necessarily be connected) with each job as a vertex and dependencies between jobs as directed edges, and each connected component having size of $4$ or less.

### Input 2 (Scoring)

- $0 \leq S \leq 2^{63}-1$

### Geographical data

- $L=2048$
- $d_\text{max}\in\{5,6,7\}$
- $s=1$
- $0.3 \leq C &lt; 0.4$ **[Decimal]**
- $M=\text{round}(0.45(4^{d_\text{max}+1}-1)/(3\times 2^{d_\text{max}-5}))$

### Segmented linear reward function

- $100 \leq L \leq T_\text{max}$
- $l = 25$
- $10^6 \leq s \leq 2\times 10^6$
- $0.3 \leq \sigma' &lt; 0.38$  **[Decimal]**
- $M = 10^7$
- $m = 1$

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