## Story

Takahashi City is planning to repair its dilapidated roads.
The city's road network can be represented as a planar undirected graph with intersections as vertices and the roads between them as edges.
Because roads under repair are closed to traffic, citizens must take detours to reach their destinations, causing frustration.
Given the maximum number of edges that can be repaired per day and the maximum number of days to complete all the repairs, please plan which edges to repair on which day so as to cause as little frustration as possible.

## Problem Statement

Given an edge-weighted undirected planar graph with $N$ vertices, we want to perform repair work on each edge exactly once in $D$ days.
We can complete the repair work on each edge in a single day, and at most $K$ edges can be repaired simultaneously on the same day.

Edges that are not under repair work are passable in both directions, and the weight of an edge represents the distance it takes to move on that edge.
Let $d(i,j)$ be the shortest distance from vertex $i$ to vertex $j$ in the original graph.
Let $d_k(i,j)$ be the shortest distance from vertex $i$ to vertex $j$ in the graph obtained by removing the edges to be repaired on day $k$ from the original graph.
If $j$ is unreachable from $i$, we define $d_k(i,j)=10^9$.
The frustration level $f_k$ for the repair work on day $k$ is defined as the expected increase in the shortest distance between two different vertices, as follows.
\[
    f_k = \frac{\sum_{i\neq j}(d_k(i,j)-d(i,j))}{N(N-1)}
\]

Using the average of the frustration levels for each day, the frustration level for the whole repair work is defined as
\[
    \mathrm{round}\left(10^3\times \frac{1}{D}\sum_{k=1}^D f_k\right)
\]
Find a repair schedule that causes as little frustration as possible.

## Scoring

For each test case, we compute the <font color="red">**relative score**</font> $\mathrm{round}(10^9\times \frac{\mathrm{MIN}}{\mathrm{YOUR}})$, where YOUR is your frustration level and MIN is the lowest frustration level among all competitors obtained on that test case. The score of the submission is the sum of the relative scores.

The final ranking will be determined by the system test with more inputs which will be run after the contest is over.
In both the provisional/system test, if your submission produces illegal output or exceeds the time limit for some test cases, only the score for those test cases will be zero, and your submission will be excluded from the MIN calculation for those test cases.

The system test will be performed only for <font color="red">**the last submission which received a result other than CE **</font>.
Be careful not to make a mistake in the final submission.

### Number of test cases

- Provisional test: 50
- System test: 2000. We will publish [seeds.txt](https://img.atcoder.jp/ahc017/seeds.txt) (sha256=0522b6c3da4e413908209488368988ebce3b3809c0d9278dc9adaf804896fa23) after the contest is over.

### About Relative Evaluation System

In both the provisional/system test, the standings will be calculated using only the last submission which received a result other than CE.
Only the last submissions are used to calculate the MIN for each test case when calculating the relative scores.

The scores shown in the standings are relative, and whenever a new submission arrives, all relative scores are recalculated.
On the other hand, the score for each submission shown on the submissions page is the sum of the frustration levels for each test case, and the relative scores are not shown.
In order to know the relative score of submission other than the latest one in the current standings, you need to resubmit it.
If your submission produces illegal output or exceeds the time limit for some test cases, the score shown on the submissions page will be 0, but the standings show the sum of the relative scores for the test cases that were answered correctly.

### About execution time

Execution time may vary slightly from run to run.
In addition, since system tests simultaneously perform a large number of executions, it has been observed that execution time increases by several percent compared to provisional tests.
For these reasons, submissions that are very close to the time limit may result in TLE in the system test.
Please measure the execution time in your program to terminate the process, or have enough margin in the execution time.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$ $D$ $K$
> 
> $u_1$ $v_1$ $w_1$
> 
> $\vdots$
> 
> $u_M$ $v_M$ $w_M$
> 
> $x_1$ $y_1$
> 
> $\vdots$
> 
> $x_N$ $y_N$

- $N$, $M$, $D$, and $K$ are integers representing the number of vertices, the number of edges, the maximum number of days, and the maximum number of edges that can be repaired per day, respectively. These satisfy $500\leq N\leq 1000$, $500\leq M\leq 3000$, $5\leq D\leq 30$, and $\mathrm{ceil}(M/D)&lt; K\leq 2\cdot\mathrm{ceil}(M/D)$.
- $u_i$, $v_i$, and $w_i$ are integers satisfying $1\leq u_i&lt;v_i\leq N$ and $1\leq w_i\leq 10^6$, and indicate that the $i$-th edge connects vertices $u_i$ and $v_i$ with weight $w_i$. The degree of each vertex is guaranteed to be at least 2.
- $(x_i, y_i)$ represents the coordinates of the $i$-th vertex, which are integers satisfying $0\leq x_i,y_i\leq 1000$. These are used to generate and visualize the graph, and you may skip reading them if you don't need them.
- It is guaranteed that the given graph is a [2-edge connected](https://en.wikipedia.org/wiki/K-edge-connected_graph) planar graph such that if vertex $i$ is placed at coordinates $(x_i, y_i)$ and the edges are drawn as line segments connecting the endpoints, every pair of edges has no common points other than the endpoints.

## Output

Let $r_i (1\leq r_i\leq D)$ be the day on which the $i$-th edge is to be repaired.
Then, output to Standard Output in the following format.

> $r_1$ $r_2$ $\cdots$ $r_M$

[Show example](https://img.atcoder.jp/ahc017/a7a9e57e.html?lang=en&amp;seed=0&amp;output=10+8+4+8+10+11+3+5+9+7+11+10+10+5+11+2+10+9+7+2+11+4+7+8+6+3+1+10+2+8+6+9+3+6+4+4+4+9+11+2+4+6+3+2+6+2+11+7+7+9+6+9+3+6+4+5+1+7+4+1+5+4+5+7+8+9+9+11+3+5+6+4+8+9+2+8+10+5+9+9+4+2+7+1+10+5+9+8+7+4+3+7+5+8+5+11+5+3+3+4+6+7+6+1+5+7+11+4+4+4+1+10+2+5+11+9+8+1+1+5+6+5+3+6+2+8+9+7+5+7+8+11+1+11+5+7+1+9+10+2+9+8+4+8+2+10+10+7+1+5+7+9+1+2+7+4+6+9+8+4+3+11+6+2+11+10+7+8+11+7+9+10+10+8+3+10+8+5+8+10+6+5+2+8+8+7+9+3+7+4+11+11+11+10+5+4+5+9+6+10+4+1+6+9+11+7+9+1+7+7+11+2+6+8+9+2+3+11+2+5+5+11+4+6+11+1+7+7+4+10+11+10+11+9+6+5+9+8+9+7+11+8+8+10+11+5+9+9+8+2+2+11+10+1+10+5+8+3+3+9+5+1+10+1+6+6+5+9+7+7+4+7+3+7+1+10+7+4+1+6+9+8+8+4+11+2+3+11+11+9+8+5+8+8+4+10+8+10+8+4+7+5+7+10+5+3+7+2+2+3+9+3+3+10+2+5+2+11+11+7+3+4+7+10+4+11+3+1+11+3+5+2+5+6+6+9+10+10+2+1+1+4+11+1+7+9+5+11+3+8+6+9+2+9+3+3+4+9+6+4+9+7+7+11+6+2+8+7+7+10+6+10+6+5+2+3+2+6+2+9+11+10+9+9+10+4+11+6+2+2+9+7+5+11+9+1+1+1+10+1+1+5+10+6+1+8+4+3+10+2+3+3+1+7+5+8+10+4+4+6+5+11+5+4+8+2+7+5+2+11+8+7+10+3+4+8+10+8+1+7+6+8+6+8+3+11+2+5+1+4+7+4+10+6+6+9+3+11+1+3+11+6+9+4+9+10+3+6+8+11+10+1+10+6+4+11+8+4+1+6+5+10+1+2+3+2+9+5+3+6+7+7+6+8+4+6+7+10+9+6+2+4+9+2+4+7+8+11+9+9+3+5+11+6+1+5+6+6+10+5+3+3+10+8+10+11+5+3+11+3+8+3+10+8+5+2+11+3+1+5+5+2+4+5+5+1+4+3+6+2+1+5+5+5+8+1+7+8+8+5+11+7+4+6+9+6+1+2+9+1+4+1+1+10+6+8+6+5+11+10+9+8+1+4+4+5+2+8+2+4+10+9+8+7+1+11+5+5+10+2+1+5+2+9+11+9+9+2+9+7+4+8+10+1+1+7+11+1+10+3+7+11+7+4+9+10+1+7+8+9+5+2+5+7+1+8+9+9+10+5+10+11+5+5+4+9+6+9+2+7+3+2+9+5+9+7+1+5+4+1+6+4+5+4+3+7+2+9+3+11+7+4+6+5+2+3+9+6+6+1+8+6+6+4+11+4+7+2+2+6+7+10+4+6+5+2+3+3+2+2+5+1+11+3+6+4+3+9+7+8+2+10+1+8+3+6+9+1+2+2+1+4+7+2+10+4+6+4+3+10+1+1+4+1+9+9+5+3+8+11+11+7+6+7+9+5+2+11+3+9+6+5+3+5+2+1+11+10+5+11+3+10+8+11+7+9+2+4+6+11+6+10+3+1+2+8+2+5+10+10+8+9+7+11+4+9+1+3+10+5+2+3+7+7+1+6+9+7+7+10+2+7+3+4+6+2+4+3+10+2+5+3+2+1+11+10+3+6+8+7+6+5+4+7+3+3+7+4+2+10+5+3+1+7+3+6+5+6+1+2+5+10+3+11+1+11+5+1+4+11+3+2+4+2+3+2+5+3+9+2+4+3+1+9+10+8+1+7+2+3+1+9+7+1+5+6+10+8+6+6+2+9+6+7+3+1+3+8+4+2+6+7+2+2+7+10+5+1+7+5+8+6+1+11+3+4+3+1+3+4+9+11+10+1+11+9+11+3+8+3+1+11+5+4+2+5+4+2+10+8+7+1+7+7+2+11+1+8+10+6+7+11+9+4+1+10+5+8+3+5+9+10+8+9+11+5+1+3+8+6+3+8+10+8+6+4+10+11+3+3+7+2+1+7+8+6+11+10+1+10+7+11+6+10+8+6+6+3+7+5+3+4+5+6+1+11+11+3+2+8+8+11+3+10+1+3+3+7+4+11+7+10+3+6+10+4+6+6+1+4+10+1+8+11+5+1+2+8+7+6+10+1+11+1+11+1+3+5+5+7+5+11+1+8+5+7+1+6+5+2+8+2+8+1+3+8+6+11+1+7+3+7+3+8+7+2+1+5+5+8+8+8+11+10+6+6+7+11+8+4+9+2+3+6+5+5+10+3+10+2+5+8+9+9+9+4+5+6+8+6+9+9+3+3+6+2+5+8+5+9+7+1+4+5+3+2+9+2+11+3+5+10+8+5+6+9+8+2+3+3+1+6+10+7+11+4+10+9+11+9+8+6+8+7+4+6+3+7+10+6+2+3+9+3+10+11+5+9+5+2+4+2+3+8+5+11+9+3+8+7+8+5+2+2+10+8+10+9+6+3+11+6+7+10+5+11+3+10+1+5+10+11+3+2+7+10+10+6+9+11+2+8+9+8+5+8+9+8+11+1+2+2+7+5+9+2+8+10+11+8+1+1+6+1+9+2+3+11+6+2+10+3+7+8+1+5+10+1+4+2+3+2+1+4+9+10+2+5+9+11+4+1+9+10+1+7+11+11+9+8+7+7+6+2+9+2+8+10+2+8+3+5+10+2+2+3+8+5+8+2+7+2+7+4+5+8+6+9+3+5+8+9+7+6+9+5+6+6+3+3+2+1+9+3+6+10+6+2+7+4+8+2+7+8+4+1+4+10+4+5+7+11+1+8+11+3+2+8+11+1+5+10+10+6+7+3+8+5+8+10+10+4+8+4+10+11+8+5+8+5+6+9+3+9+1+11+5+6+3+9+7+10+5+8+9+10+4+7+3+5+7+6+2+7+1+9+4+1+5+4+4+7+11+4+5+11+6+4+10+11+7+5+2+3+9+2+11+5+11+9+5+4+3+1+5+9+11+8+11+10+6+7+10+8+7+6+4+2+6+9+4+11+9+11+11+4+10+4+5+2+5+5+9+2+5+5+8+2+1+5+4+2+2+1+2+8+9+1+8+5+4+1+6+4+4+5+5+11+10+8+10+8+5+3+7+10+8+6+4+5+1+2+3+9+10+7+7+10+7+9+2+4+7+2+2+5+8+2+11+4+5+3+5+4+7+2+1+9+6+7+2+8+9+6+3+3+5+4+5+3+6+3+7+8+11+2+6+4+4+8+9+6+10+8+11+2+2+10+3+2+9+4+8+9+4+10+1+3+7+1+6+8+4+3+10+11+10+2+10+10+1+10+4+5+11+3+9+9+10+6+1+1+9+2+6+2+11+3+2+5+7+8+9+4+6+3+9+2+4+5+2+9+6+5+4+4+9+2+6+9+4+7+1+2+6+8+7+7+3+1+1+11+9+2+1+4+11+10+11+1+9+11+1+8+9+1+3+8+10+9+11+6+1+8+11+1+7+7+1+4+10+11+1+5+7+10+8+11+8+4+1+9+6+5+3+6+4+6+10+1+9+10+10+9+4+3+9+6+6+11+9+10+11+8+6+10+3+3+6+9+1+2+11+10+9+6+10+10+7+11+7+11+9+9+8+6+11+10+10+6+1+11+6+11+8+4+10+2+4+10+4+5+4+5+6+3+3+11+1+1+1+4+1+2+6+1+9+9+7+5+3+6+10+10+3+9+9+4+3+7+5+6+4+11+8+1+5+1+9+2+5+11+8+6+4+5+4+9+5+2+1+7+11+5+3+4+9+1+11+11+10+10+3+9+8+4+4+11+8+9+3+3+4+1+3+5+10+9+6+2+8+2+11+2+9+3+7+7+2+7+3+2+6+11+7+7+11+2+10+5+5+6+7+10+6+9+9+4+10+7+7+8+1+11+8+6+3+8+10+7+7+7+1+11+2+2+3+4+7+4+8+9+7+6+8+4+6+6+10+3+7+6+2+10+8+11+7+10+4+10+6+8+4+8+11+10+4+9+2+2+4+6+7+4+6+10+11+2+6+10+7+3+4+6+11+4+8+4+1+7+9+9+8+5+2+6+4+7+10+4+5+1+1+3+1+3+6+3+1+1+9+11+8+3+6+1+1+3+5+2+5+4+4+4+3+11+1+2+3+5+6+1+7+1+10+2+7+3+2+4+4+11+8+6+2+3+10+1+7+3+3+7+11+7+2+4+10+4+2+10+7+2+4+5+9+4+11+6+9+8+8+6+11+3+5+8+2+10+4+5+11+2+11+11+10+11+3+9+9+9+9+1+5+11+4+1+6+7+11+8+6+3+8+9+6+11+11+6+10+1+11+5+3+7+6+2+4+8+7+4+6+7+10+7+6+6+3+5+1+7+8+4+11+9+7+8+6+3+11+10+5+9+2+3+7+7+3+11+9+7+7+7+1+7+7+1+1+3+11+9+6+11+3+9+3+6+3+8+10+9+1+2+10+6+10+8+1+7+3+3+6+8+1+7+4+4+3+8+1+4+4+11+3+5+11+8+11+10+1+1+8+2+5+9+11+9+1+4+10+4+6+5+8+5+4+3+9+6+6+5+8+7+1+10+6+8+1+1+8+2+9+4+1+5+1+11+11+8+2+1+9+1+3+2+4+1+11+1+2+10+6+2+1+3+8+1+6+4+8+4+9+2+1+8+11+2+8+10+5+10+6+5+4+8+9+1+3+8+2+11+8+5+2+7+6+9+1+11+4+2+7+10+7+2+3+10+8+1+4+8+7+4+10+7+11+5+1+5+4+11+2+5+3+9+9+8+7+4+11+1+11+7+6+4+6+7+9+2+4+6+10+11+7+9+9+2+7+4+5+11+10+2+1+10+10+9+9+9+5+11+1+3+10+10+7+5+11+1+10+4+3+3+3+11+8+11+4+5+8+9+8+1+6+11+6+2+6+8+3+4+8+6+4+2+2+10+10%0D%0A)

## Input Generation

Let $\mathrm{rand}(L,U)$ be a function that generates a uniform random integer between $L$ and $U$, inclusive.

### Generation of the graph

The number of vertices $N$ is generated by $N=\mathrm{rand}(500,1000)$.
Randomly select $N$ points $(x_1,y_1),\cdots,(x_N,y_N)$ from the lattice points contained in a circle with center $(500,500)$ and radius $500$.
If the Euclidean distance between $(x_i,y_i)$ and an already selected point $(x_j,y_j)$ ($j&lt;i$) is less than or equal to $10$, we select $(x_i,y_i)$ again.
A planar graph $(V,E)$ with these points as vertex set $V$ is constructed as follows.

First, compute [Delaunay triangulation](https://en.wikipedia.org/wiki/Delaunay_triangulation) and set $E$ as the set of edges of the triangulation.
Generate a random real value $p$ between $0$ and $0.75$.
For each edge $e\in E$ in random order, perform the following operation: remove $e$ from $E$ with probability $p$ if the degree of both endpoints are at least $4$.
After completing the process for all edges, if the graph $(V,E)$ is not 2-edge connected, then we restore $E$ and we redo the process from generating $p$.
The weight of each edge $(u,v)$ is determined by $\mathrm{round}(10^3\times \sqrt{(x_u-x_v)^2+(y_u-y_v)^2})$.

### Generation of D and K

$D$ is generated by $\mathrm{rand}(5, 30)$.
Let $K'=\mathrm{ceil}(M/D)$.
$K$ is generated by $\mathrm{rand}(K'+1,2K')$.

## Tools (Input generator and visualizer)

- [Web version](https://img.atcoder.jp/ahc017/a7a9e57e.html?lang=en): Chrome is recommended. Firefox will not display the score.
- [Local version](https://img.atcoder.jp/ahc017/a7a9e57e.zip): You need a compilation environment of [Rust language](https://www.rust-lang.org/).-   - [Pre-compiled binary for Windows](https://img.atcoder.jp/ahc017/a7a9e57e_windows.zip): If you are not familiar with the Rust language environment, please use this instead.

<font color="red">
Please be aware that sharing visualization results or discussing solutions/ideas during the contest is prohibited.
</font>