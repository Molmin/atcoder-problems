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

## Particulars of Problem A

In problem A we pass all orders which appear at time $0 \le t &lt; 0.95 \times T_{\text{max}}$ as an input to the contestant code. The task is to provide an algorithm which optimizes the moves of the car such that the above score becomes maximal.

## Input Format

Input is provided in the following form:

```plain
$|V|$ $|E|$
$u_{1}$ $v_{1}$ $d_{u_{1}, v_{1}}$
$u_{2}$ $v_{2}$ $d_{u_{2}, v_{2}}$
:
$u_{|E|}$ $v_{|E|}$ $d_{u_{|E|}, v_{|E|}}$
$T_{\text{max}}$
$\mathrm{info}_{0}$
$\mathrm{info}_{1}$
:
$\mathrm{info}_{T_{\text{max}}-1}$
```

- In the first line $|V|$ denotes the number of vertices, while $|E|$ denotes the number of edges.
- The following $|E|$ lines denote the edges of the graph. In particular, in the $i$th line $u_{i}$ and $v_{i}$ denote the edge connecting $u_{i}$ and $v_{i}$ and $d_{u_{i}, v_{i}}$ the corresponding distance.
- The following line denotes the number of steps $T_{\text{max}}$.

In the following line, $\mathrm{info}_t$ is information about the order from the customer that occurs at time $t$. $\mathrm{info}_t$ is given in the form:

```plain
$N_{\text{new}}$
$\mathrm{new\_id}_1$ $\mathrm{dst}_1$
$\mathrm{new\_id}_2$ $\mathrm{dst}_2$
$\vdots$
$\mathrm{new\_id}_{N_{\text{new}}}$ $\mathrm{dst}_{N_{\text{new}}}$
```

- $N_{\text{new}}$ represents the number of new orders which appear at time $t$.
- The next $N_{\text{new}}$ lines give the newly generated order information. The $i$-th order information indicates that the order ID $\mathrm{new\_{id}}_i$ of the new order, while $\mathrm{dst}_i$
denotes the vertex to which the customer wishes the order to be delivered.
- Note: If $N_{\text{new}}=0$, there are no new lines.

## Requirements

- All inputs are of non-negative integer value.
- $T_{\text{max}} = 10000$
- $200 \leq |V| \leq 400$
- $1.5 |V| \leq |E| \leq 2 |V|$
- $1 \leq u_{i}, v_{i} \leq |V|$ $(1 \leq i \leq |E|)$
- $1 \leq d_{u_i, v_i} \leq \lceil 4\sqrt{2|V|} \rceil$ $(1 \leq i \leq |E|)$
- The given graph has no self-loops / multiple edges and is guaranteed to be connected.
- $0 \leq N_{\text{new}} \leq 1$
- $1 \leq \mathrm{new\_id}_{i} \leq T_{\text{last}}+1$ $(1 \leq i \leq N_{\text{new}})$. Note: If all orders are generated by the order generation rule as explained above, the total number of orders is at most $T_{\text{last}}+1$. Therefore, the possible range of $\mathrm{new\_id}_{i}$ should be from $1$ to $T_{\text{last}}+1$.
- $2 \leq \mathrm{dst}_i \leq |V|$ $(1 \leq i \leq N_{\text{new}})$
- The order IDs $\mathrm{new\_{id}}_i$ are unique.

## Output Format

The Output expects $T_{\text{max}}$ integers in the format specified below.

```plain
$\mathrm{command}_{0}$
$\mathrm{command}_{1}$
:
$\mathrm{command}_{T_{\text{max}}-1}$
```

In particular, $\mathrm{command}_{i}$ shall specify the movement of the delivery car by using one of the following two options:

1) `stay`, if the car shall not move:

```plain
-1
```

2) `move w`, if the car shall be moved one step towards the neighboring vertex $w$

```plain
w
```

Note that in case of 2) $w$ has to satisfy the following conditions:

- $w \in V$
- If the car is at vertex $u$: $\left\{ u, w \right\} \in E$.
- If the car is on the edge $\left\{ u, v \right\}$, $w$ must either satisfy $u = w$ or $v = w$.

## Input Example

```plain
5 7
1 2 5
5 3 4
2 4 8
1 5 1
2 3 3
4 5 3
4 3 9
4
1
1 2
1
2 5
1
3 4
0
```

**Note that this input is an example of small size and does not meet the constraints of the contest.**

## Output Example

```plain
2
-1
1
5
```

## Explanation

The example operates on a graph with $|V| = 5$ vertices, $|E| = 7$ edges, and $T_{\text{max}} = 4$ time steps. We now describe the orders which have occured and the movement of the car.

### Time $t=0$

At time $t=0$ an order is placed at the shop. This order has ID$= 1$ and should be delivered to vertex $2$. Because your car is currently at vertex one, the order will be automatically transfered into your car. In this way, when your car is at the shop, all orders which have been made at present and before, will automatically be loaded into your car.

### Time $0$ → $1$

You choose to move towards vertex `move 2`. You will now move one step towards vertex 2.

### Time $t=1$

A new order has appeared. It has ID $=2$ and shall be delivered at  vertex $5$.

### Time $1$ → $2$

You decided to `stay`. You can now stay on the edge where you are.

### Time $t=2$

A new order has appeared. It has ID $=3$ and shall be delivered at  vertex $4$.

### Time $2$ → $3$

You decided to move `move 1` back to vertex 1.
You are approaching one step towards vertex 1.
Doing a U-turn in this way is explicitly allowed.

### Time $t=3$

New orders have not occurred. Now that you are at the vertex $1$ (store), the orders with order ID $2, 3$ are loaded into your car. In a similar way, whenever you return to the store, all the orders that have already been placed are loaded into your car automatically.

### Time $3$ → $4$

Being at vertex 1 you choose `move 5`. You are moving your car one step towards vertex $5$. You arrive at vertex $5$.

### Time $t=4$

Since you arrived at vertex $5$, the order with order ID $2$ can be delivered.

## Sample Code A

A software toolkit for generation of input samples, scoring and testing on a local contestant environment, and  sample codes for beginners
is provided through the following [link](https://img.atcoder.jp/hokudai-hitachi2019-1/5bc882a275d9543da1b79d9a670c6523.zip). In addition we provide [software for visualizing](https://img.atcoder.jp/hokudai-hitachi2019-1/d2dded0de70ff38cbb8aa6dbfb88dfc3.zip) the contestants results.