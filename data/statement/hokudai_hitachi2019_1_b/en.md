## Problem Setting

## Overview

- **Concept:** In this programming contest, you will run a delivery service. Customers will place orders with your shop. Each order has a unique $\text{ID}$ and should be delivered to the corresponding customer. Your delivery service has one car. The car will fetch the ordered item from the shop and deliver it to the customer.
- **Score:** Your goal is to deliver as many items as possible, as quickly as possible in a given amount of time $T_{\text{max}}$. (Orders are expected until $0.95 \times T_{\text{max}}$).
- **Constraint:** In this contest there is no constraint on the number of items you can place in the car. However, an item can only be loaded in the car, by fetching it from the shop, after the order has been placed.
- **Problem A/B:** In problem A all order positions and times are given to the contestant in advance and the contestant algorithm shall optimize the moves of the car to make as many deliveries as possible as fast as possible. On the other hand, in problem B orders appear online, that is new orders appear, while you move your car to make as many deliveries as possible as fast as possible.

![overview](https://img.atcoder.jp/hokudai-hitachi2019-1/7faf401c00c790b9a8cb5c6968dc80c3.png)

## Specification of Time and Space:

- **Time:** In this contest we model the progress of time by integer values $0 \le t &lt; T_{\text{max}}$.
- **Map:** In this contest we model a map by a simple, undirected, and connected graph $G=(V, E)$, consisting of a set of vertices $V$ and a set of edges $E$
- **Shop and customer locations:** The vertices $u \in V$ are labeled from $1$ to $|V|$ and the vertex $u=1$ denotes the location of your shop, while vertices $u = 2,...,|V|$ denote locations of potential customers. Here, $|V|$ denotes the number of elements of the set $V$.
- **Streets:** Each edge $\left\{ u, v \right\} \in E$ represents a street connecting the vertices $u, v \in V$. The corresponding length is given by an integer edge weight $d_{u, v} \ge 1$.
- **Graph creation:** The algorithm for generating the map graph based on a random seed is specified in the following pseudo-code. For further details, please see the sample code below.

 **Pseudo code:** Map graph generator 

- **Input:**$|V|$, $|E|$, $\mathrm{MaxDegree}=5$
- **2d vertex grid:**
-   - First, find the largest integer $R &amp;gt; 0$ such that $|V| = R^{2} + r$, with $r$ being the smallest possible non-negative integer.
-   - Then we plot points $(x, y)$ on the 2d vertex grid $(0 \leq x, y \lt R)$.
-   - For each point $(x, y)$ add a uniform random offset $dx, dy \in [0, 1]$, giving the final vertex position $(x + dx, y + dy)\in [0,R] \times [0,R]$.
-   - Finally, add the remaining $r$ vertices at a uniform random position $(x, y)$ with $0 \leq x, y \leq R$.
-   - Vertex labels $u \in V$ are assigned by random shuffling. The shop is the vertex $u=1$.
- **How we create Highways:**
-   - To generate a highway network, we create a complete graph $G_{\text{comp}}$ on the vertex set $u \in V$, assigning each vertex pair $u, v \in V \times V$ the Euclidean distance $W_{u, v}$ as an edge weight.
-   - Next, we construct a [minimum spanning](https://en.wikipedia.org/wiki/Minimum_spanning_tree) tree of $G_{\text{comp}}$. The $|V|-1$ edges of the minimum spanning tree are the highway network of the graph $G$. We assign each of those edges $\left\{ u, v \right\}$ an edge weight $d_{u,v} \leftarrow \lceil 2 \times W_{u, v} \rceil$.
- **How we add side roads:**
-   - To create a network of side roads, we successively add $|E|-(|V|-1)$ edges to the graph $G$ as follows:
  -   -   - Update $\mathrm{cost}(u,v)$.
-   -   - Among the vertex pairs $\left( u, v \right) \in V\times V$, not yet connected by an edge, select a pair with minimal $\mathrm{cost}(u,v)$.
-   -   - Assign the edge weight $d_{u,v} \leftarrow \lceil 4 \times W_{u, v} \rceil$.
-   - Here, $\mathrm{cost}(u,v)$ is essentially based on the Euclidean distance of vertices, giving preference to connecting nearby vertices with low degree. In addition, preference is given to side roads along the rectangular grid, to avoid too many bridges. The detailed definitions are as follows:
  -   -   - Define $\mathrm{degree}(u)$, the degree of vertex $u\in V$ as the number of incident edges.
-   -   - Define $\mathrm{color}(u)$ for each vertex $u\in V$ according to its original position $(x,y)$ on the vertex grid as:
    -   -   -   - If $x+y$ is even : $\mathrm{color}(u) = 0$
-   -   -   - If $x+y$ is odd : $\mathrm{color}(u) = 1$
-   -   -   - For the remaining $r$ vertices : Assign a color $\mathrm{color}(u) \in \left\{0,1\right\}$ at random.
-   -   - Define a factor $f(u,v)$ as follows:
    -   -   -   - If $\mathrm{color}(u)$ and $\mathrm{color}(v)$ are the same : Set $\mathrm{f}(u,v) = 5$
-   -   -   - If $\mathrm{color}(u)$ and $\mathrm{color}(v)$ are different : Set $\mathrm{f}(u,v) = 1$
-   -   - Define a factor $g(u)$ as follows:
    -   -   -   - If $\mathrm{degree}(u) \lt \mathrm{MaxDegree}$ : Set $g(u)=1$
-   -   -   - If $\mathrm{degree}(u) \geq \mathrm{MaxDegree}$ : Set $g(u)=\infty$
-   -   - Finally, the cost is defined as follows:
    -   -   -   - $\mathrm{cost}(u,v) = W_{u,v}\times \mathrm{degree}(u) \times \mathrm{degree}(v) \times f(u,v) \times g(u) \times g(v)$.
- ** How we assign order frequencies: **
-   - Assign each vertex $u \in V$ an order frequency $f_u \in \left\{0,1,2\right\}$.
-   - Init the order frequency of the shop vertex: $f_1 \leftarrow 0$.
-   - Init the order frequency of the other vertices: $f_u \leftarrow 1$
-   - Now determine vertices with order frequency 2. For this draw a uniform random center point $c=(c_x,c_y)\in [R/4,3R/4]\times[R/4,3R/4]$ and then for all vertices $u=2,...,|V|$ do:  
    -   -   - If $\mathrm{EuclideanDistance}(c,u)\le R/8 + \mathrm{uniformRandom}[0,R/8]$: $f_{u} \leftarrow 2$

## Specification of Car Locations and Moves:

In order to make deliveries you will operate a delivery car, which can take positions and make moves as specified below.

- <p>**Car position:** A car can generally take two types of position:</p>
-   - on a vertex $u \in V$.
-   - on an edge $\left\{ u, v \right\} \in E$. More specifically, it is located at a distance $x$ $(0 \lt x \lt d_{u, v})$ from $u$ to $v$.
- <p>**Car move:** At each step  $0 \le t &lt; T_{\text{max}}$ you have to choose one of the following actions in order to control your delivery car.</p>
-   - `stay`: stay at the current position.
-   - `move w`: Take one step towards vertex $w \in V$.

<p>In case of choosing `move w`, $w$ must obey the following constraints. A failure to obey these constraints results in a wrong answer `WA`.
</p>-   - $w$ must be a vertex, i.e., $w \in V$.
-   - If the car is on vertex $u \in V$, there must be an edge connecting $u$ and $v$, i.e., $\left\{ u, w \right\} \in E$.
-   - If the car is on the edge $\left\{ u, v \right\} \in E$, $w$ must either be $w = u$ or $w = v$.
<p></p>

![Car position and moves](https://img.atcoder.jp/hokudai-hitachi2019-1/60c6d261238fb10fb2bb26d89d275f9c.png)

## Orders, Deliveries, and Constraints:

- **Orders:** Throughout the contest each order is characterized by three quantities: A unique order ID, a vertex $v \in V$ indicating the order destination, and the order time $t$ at which the order appeared. For the detailed format see below.
- **Order generation:** At each time $0 \le t \le T_{\text{last}} = 0.95 \times T_{\text{max}}$ up to one new order can appear with probability $p_{\text{order}}(t)$. In case there is an order, the order destination $i$ is chosen from the vertex set $V$ with probability proportional to the order frequency $f_i$. For details, see the pseudo-code below or the sample code further below.

 **Pseudo code:** Order generation 

- **Input:** Last order time $T_{\text{last}}$ and average order probability $p_{\text{order}}(t)$.
- **Init:** $\mathrm{ID} \leftarrow 0$.
- For each step $t = 0, ..., T_{\text{last}}$ do:
    -   - Generate a uniform random number $r \in [0,1]$.
-   - **If** $r \le p_{\text{order}}(t)$:
      -   -   - Select a vertex position $u \in V$ at random with probability proportional to the order frequency $f_{u}$ of the vertex.
-   -   - $\mathrm{ID} \leftarrow \mathrm{ID} + 1$
-   -   - place order (new order ID, order time $t$, vertex position
      $u \in V$)
-   - **Else:** place no order

- **Note:** The average order probability is defined as follows:
- $p_{\text{order}}(t) =
\begin{cases}
t / T_{\text{peak}}, &amp;
\text{if } 0\le t \lt T_{\text{peak}}, \\
(T_{\text{last}} - t) / (T_{\text{last}}- T_{\text{peak}}), &amp;
\text{if } T_{\text{peak}} \le t \lt T_{\text{last}}, \\
0, &amp;
\text{if } T_{\text{last}} \le t,
\end{cases}$
- where $T_{\text{last}}:=0.95 \times T_{\max}$ and $T_{\text{peak}}$ is drawn randomly uniform from the interval $[0, T_{\text{last}}]$.
- Note: The value of $T_{\text{peak}}$ will not be given as an input.

![](https://img.atcoder.jp/hokudai-hitachi2019-1/caa24f9e6a715e0d1a778f1fdfe4e14b.png)

- **Delivery:** To deliver an order, the contestant must do the following steps after the order has been placed:-   - **(1st) Move the car onto the shop:** Note: When moving a car onto the shop, all orders with order time less than or equal to the current time, will be transfered into the car. On the other hand, orders which have not appeared yet, cannot be placed into the car.
-   - **(2nd) Move the car to the customer position:** To finalize a delivery, move the car onto the vertex of the customer position. Note: Orders which have not been transfered into the car yet, will not be delivered, even if you arrive at the customer position.

![constraint image](https://img.atcoder.jp/hokudai-hitachi2019-1/03b28647c6ddc92cc3cbb33ade09f468.png)

- **Constraints:** Throughout the contest, we assume each order has a unique $\text{ID}$ and should be delivered to the corresponding customer. It is further assumed that an unlimited number of orders can be placed in the car.

## Scoring

- During the contest the total score of a submission is determined by summing the score of the submission with respect to 30 input cases.
- After the contest a system test will be performed. To this end, the contestant's **last submission** will be scored by summing the score of the submission on 100 previously unseen input cases.
- For each input case, the score is calculated as follows:
<p style="text-align:center;">
    $\text{Score} =
 \sum_{i \in D} {(T_{\text{max}})}^{2} - {(\mathrm{waitingTime}_i)}^{2},$
</p>
Here we use the following definitions:
-   - $D$ : the set of orders delivered until $t=T_{\text{max}}$
-   - the waiting time of the $i$th order: $\mathrm{waitingTime}_i = \mathrm{deliveredTime}_i - \mathrm{orderedTime}_i$.
-   - Note that an input case giving the output `WA` will receive $0$ points.

## Particulars of Problem B:

Problem B is an <span style="color:red"> interactive </span> contest, where the contestant code successively receives updates on newly generated and delivered orders from a host code, while simultaneously servicing the customer by moving the car to a neighboring position in every step $t=0,...,T_{\max}-1$. The precise flow which details the interaction of the contestant and host code is shown below.

Contestant Code
Host Code

Generate and output graph $G$

+

Time $t$: Generate and output new orders

+

Time $t$: If on shop, output orders loaded into car

+
Time $t$: Determine and output a move

+

Check feasibility of move; If move unfeasible: output `NG`, If feasible: output `OK`

+

Time $t+1$: update and output information on delivered items (if any)

Note: The host code outputs the graph only once. The processes marked by a "+" on the left side of the table are repeated iteratively for integers $t$ in $t = 0,..., T_{\max} - 1$.

## Input/Output Format for the Standard IO

At first, the host code will output a graph $G$, the order frequencies $f_{i}$ for each vertex $i$, which are proportional to the probability of an order to appear at vertex $i$, and the total number of steps $T_{\max}$.

```plain
$|V|$ $|E|$
$u_1$ $v_1$ $d_{u_1, v_1}$
$u_2$ $v_2$ $d_{u_2, v_2}$
$\vdots$
$u_{|E|}$ $v_{|E|}$ $d_{u_{|E|}, v_{|E|}}$
$f_1$ $f_2$ $\ldots$ $f_{|V|}$
$T_{\max}$
```

- First line: $|V|$ number of vertices, $|E|$ number of edges
- The next $|E|$ lines: The edges of the graph. In particular, the $i$th line denotes the vertices $u_i$ and $v_i$ which form an edge, along with the corresponding edge weight $d_{u_i, v_i}$.
- The next line: The order frequencies $f_i$ which determine the probability of an order at vertex $i$ as $p_{i}=\frac{f_{i}}{\sum_{i}f_{i}}$.
- The last line: The total number of car updates $T_{\max}$.

At time $t$ we first obtain the following information through the standard input.

```plain
$N_{\text{new}}$
$\mathrm{new\_id}_1$ $\mathrm{dst}_1$
$\mathrm{new\_id}_2$ $\mathrm{dst}_2$
$\vdots$
$\mathrm{new\_id}_{N_{\text{new}}}$ $\mathrm{dst}_{N_{\text{new}}}$
$N_{\text{put}}$
$\mathrm{put\_id}_1$
$\mathrm{put\_id}_2$
$\mathrm{put\_id}_{N_{\text{put}}}$
```

- $N_{\text{new}}$ represents the number of new orders which appeared at time $t$.
- The next $N_{\text{new}}$ lines give the newly generated order information. The $i$th order information indicates that the order ID $\mathrm{new_{id}}_i$ of the new order, while $\mathrm{dst}_i$ denotes the vertex to which the customer wishes the order to be delivered.
- $N_{\text{put}}$ represents the number of items transfered into the car at time $t$.-   - If the car is not at the vertex of the store $N_{\text{put}}$ will be zero.
- The subsequent $N_{\text{put}}$ lines indicate the order information for the newly loaded items. In particular, the $i$th line indicates that the order ID corresponding to the product loaded in the car is $\mathrm{put_{id}}_i$.

Next, in order to move the delivery car to a neighboring position the contestant code must at every time $t$ ($0 \leq t \lt T_{\max}$) output the following $\mathrm{command}$ to the standard output.

```plain
$\mathrm{command}$
```

Here, $\mathrm{command}$ must be of the following form

- If you want the car to `stay` at its current position, send `-1` to the standard output
- If you want the car to move one step towards a neigboring vertex `move w`, send `w` to the standard output

Note: In case you choose `move w`, $w$ must meet all of the following conditions. If any of the following conditions is violated, the host code will output `NG` and the contestant should terminate the program, ultimately leading to `WA` (incorrect).

- $w$ is a vertex index with $w \in \left\{1, ... , |V|\right\}$
- If the car is on a vertex $u$, the edge $\left\{ u, w \right\} \in E$ must exist
- If the car is on an edge $\left\{ u, v \right\}$, $w$ must either be $w = u$ or $w = v$

After your action at time $t$ is send to the standard output, the host code will send the following information about time $t + 1$ to the standard input.

```plain
$\mathrm{verdict}$
$N_{\text{achieve}}$
$\mathrm{achieve\_id}_1$
$\mathrm{achieve\_id}_2$
$\vdots$
$\mathrm{achieve\_id}_{N_{\text{achieve}}}$
```

- $\mathrm{verdict}$ is a string indicating whether your action at time $t$ was valid. It can be one of the two following options.-   - `OK`: Indicating that your action was feasible
-   - `NG`: Indicates that your action is infeasible. If you receive this input, **you must terminate the program immediately.** It is guaranteed to be WA (incorrect), if it is terminated immediately.If you do not terminate immediately the behavior is undefined.
- $N_{\text{achieve}}$ represents the number of orders that have been delivered at  time $t$.-   - If the car is not at a delivery vertex, no orders have been delivered and $N_{\text{achieve}}=0$.
- The subsequent $N_{\text{achieve}}$ lines indicate the delivered orders. In particular, the $i$th line indicates the order ID $\mathrm{achieve\_{id}}_i$.

Finally, after receiving the standard input of the host code after the last step $T_{\max}$ **you must terminate the program immediately.**

## Constraints

### I/O Constraints

- All numbers given through the standard input are integers.
- All outputs must be integers
- $T_{\text{max}} = 10000$
- $200 \leq |V| \leq 400$
- $1.5 |V| \leq |E| \leq 2|V|$
- $1 \leq u_{i}, v_{i} \leq |V|$ $(1 \leq i \leq |E|)$
- $1 \leq d_{u_i, v_i} \leq \lceil 4\sqrt{2|V|} \rceil$ $(1 \leq i \leq |E|)$
- The given graph has no self-loops, no multiple edges and is guaranteed to be connected.
- $f_1 = 0$
- $f_i \in \left\{ 1, 2 \right\}$ ($2 \leq i \leq |V|$)
- $\mathrm{verdict} \in \left\{ \text{"OK"}, \text{"NG"} \right\}$
- $0 \leq N_{\text{new}} \leq 1$
- $1 \leq \mathrm{new\_id}_{i} \leq T_{\text{last}}+1$ $(1 \leq i \leq N_{\text{new}})$. Note: If all orders are generated by the order generation rule as explained above, the total number of orders is at most $T_{\text{last}}+1$. Therefore, the possible range of $\mathrm{new\_id}_{i}$ should be from $1$ to $T_{\text{last}}+1$.
- The order IDs $\mathrm{new\_{id}}_i$ are unique.
- $2 \leq \mathrm{dst}_i \leq |V|$ $(1 \leq i \leq N_{\text{new}})$
- The integer which the contestant outputs to the standard output at time $t$ must either be $-1$ or $1 \leq w \leq |V|$

## Input/Output Example

.pre-sample-inout {
  margin: 0;
}

  Time
  Contestant
  Host Code
  Explanation

  
  
  
```plain
5 7
1 2 5
5 3 4
2 4 8
1 5 1
2 3 3
4 5 3
4 3 9
0 1 1 5 5
500
```
  
   At first, the host code provides the graph data through the standard input. In this example, the graph has $|V| = 5$ vertices and $| E | = 7$ edges. Next, the order frequency for each vertex is given in one line. Finally, $T_{\max}$ is given.

  $0 \rightarrow 1$
  
  
```plain
1
1 5
1
1
```
  
   At time $t=0$ we get one order. This order has ID$= 1$ and should be delivered to vertex $5$. Because your car is currently at vertex one, the order will be automatically transfered into your car. In this way, when your car is at the shop, all orders which have been made at present and before, will automatically be loaded into your car.

  
```plain
2
```
  
  
  You decided to move one step towards vertex.

  
  
```plain
OK
0
```
    
  The first line indicates that your move was feasible. The second line shows that no orders have been delivered.

  $1 \rightarrow 2$
  
  
```plain
1
2 2
0
```
  
   One new order (ID $=2$, delivery vertex  $=2$) has occured. Your car is on the edge between vertex $1$ and $2$, so zero orders have been transfered to your car.

  
```plain
-1
```
  
  
  You decided to keep your car in the same position.

  
  
```plain
OK
0
```
  
   Your move was valid. No orders will be delivered, because you are not at a delivery item position.

  $2 \rightarrow 3$
  
  
```plain
1
3 4
0
```
  
  A new order (ID $=3$, delivery vertex $=4$) has appeared. 

  
```plain
1
```
  
  
  You decided to move back one step towards vertex $1$. In this way you are allowed to perform a U-turn.

  
  
```plain
OK
0
```
  
  No orders have been delivered.

  $3 \rightarrow 4$
  
  
```plain
0
2
2
3
```
  
  Since the car has returned to the store, products corresponding to order ID 2 and 3 are loaded onto the car.

  
```plain
5
```
  
  
  The contestant has decided to move one step towards vertex 5.

  
  
```plain
OK
1
1
```
  
  Since you arrived at vertex 5, the order with ID $1$ was delivered.

  $4 \rightarrow 5$
  
  
```plain
0
0
```
  
  There is no new order. 

  
```plain
5
```
  
  
  The contestant decides to move one step towards vertex $5$.

  
  
```plain
NG
```
  
  The input was invalid and you should terminate your program. 

## Using the Standard Output

When returning your move instruction to the standard output, please use the flush command. As an example, consider the case where you want to output `-1`. This is how to do it in some of the major programming languages.

### C++

```plain
std::cout << "-1" << std::endl;
```

### Java

```plain
System.out.println("-1");
```

### Python 3.4

```plain
print("-1", flush=True)
```

## Sample Code B

A software toolkit for generation of input samples, scoring and testing on a local contestant environment, and  sample codes for beginners
is provided through the following [link](https://img.atcoder.jp/hokudai-hitachi2019-1/7742d79123e4cd369848aebec76fbc63.zip). In addition we provide [software for visualizing](https://img.atcoder.jp/hokudai-hitachi2019-1/d2dded0de70ff38cbb8aa6dbfb88dfc3.zip) the contestants results.