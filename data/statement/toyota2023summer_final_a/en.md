## Story

Takahashi manages a transit warehouse for transporting containers.
Today, many containers are scheduled to be brought into this warehouse, and tomorrow, all of these containers will be loaded onto trucks in a predetermined order for transportation.
The order in which the containers will arrive is unknown, so please flexibly store them in appropriate locations in the warehouse, taking into account the order in which they will be transported out.

## Problem Statement

There is a warehouse with a grid of $D\times D$ squares.
Let $(0,0)$ be the coordinates of the northwesternmost square and $(i,j)$ be the coordinates of the squares located $i$ squares to the south and $j$ squares to the east from there.
The warehouse entrance is in the square $(0,(D-1)/2)$, where $D$ is an odd number.
There are impassable obstacles placed in $N$ squares out the $D^2-4$ squares except for the entrance and its $3$ adjacent squares.

$D^2-1-N$ containers are brought into the warehouse one by one.
Each container is assigned a unique number from $0$ to $D^2-2-N$ which indicates the order in which the containers are to be transported out.
**Information on the order of containers is not given in advance, and the number assigned to a container is revealed at the time it is brought in.**
Each $D\times D-1-N$ square other than the entrance and obstacles can hold at most $1$ container.
Each time a container is brought in, choose a square to store it.
The chosen square must satisfy the following conditions.

1. It is neither the entrance nor an obstacle square, and there are no other containers stored at the chosen square.
2. It must be reachable from the entrance by only passing through adjacent empty squares in the four directions.

After all the containers are stored, please transport out all of them one by one.
The container to be transported out must satisfy the following conditions.

1. The square containing the container to be transported out must be reachable from the entrance by only passing through adjacent empty squares in the four directions.

Optimize the storage location of the containers and the order in which they are transported out so that the order is as close as possible to the specified order.

## Scoring

Let $b_i (0\leq b_i\leq D^2-2-N)$ be the number assigned to the container transported out for the $i$-th time ($0\leq i\leq D^2-2-N$).
Let $B$ be the number of inversions of $b_0,\cdots,b_{D^2-2-N}$, that is, the total number of pairs $(i,j)$ such that $i &lt; j$ and $b_i &gt; b_j$.
Then, you will obtain the following score.

\[
\mathrm{round}\left(10^9\times \frac{(D^2-N)(D^2-1-N)/2-B}{(D^2-N)(D^2-1-N)/2}\right)
\]

There are $30$ test cases for each $N=0,1,\cdots,9$, for a total of 300 test cases, and the score of a submission is the total score for each test case.
If your submission produces an illegal output or exceeds the time limit for some test cases, the submission itself will be judged as WA or TLE , and the score of the submission will be zero.
The highest score obtained during the contest will determine the final ranking, and there will be no system test after the contest.
If more than one participant gets the same score, they will be ranked in the same place regardless of the submission time.

## Input and Output

First, the size of the warehouse, $D$, the number of obstacles $N$, and the coordinates $(ri_0,rj_0),\cdots,(ri_{N-1},rj_{N-1})$ of obstacles are given from Standard Input in the following format.

```plain
$D$ $N$
$ri_0$ $rj_0$
$\vdots$
$ri_{N-1}$ $rj_{N-1}$
```

For all test cases, we fix $D = 9$.
The number of obstacles $N$ satisfies $0\leq N\leq D$.
The coordinates of each obstacle $(ri_k,rj_k)$ are different from the entrance and any of its three adjacent squares, furthermore, all squares except the obstacles are guaranteed to be reachable from the entrance.

After reading the above information, repeat the following process $D^2-1-N$ times.

In the $d$-th process ($0\leq d\leq D^2-2-N$), the number $t_d$ assigned to the $d$-th container brought in is given on a single line from Standard Input.
Each $t_d$ is an integer value between $0$ and $D^2-2-N$, and each container has a unique number.

After reading the information of $t_d$, output the coordinates $(pi_d,pj_d)$ of the square to store the container to Standard Output on a single line in the following format.

```plain
$pi_d$ $pj_d$
```

<font color="red">**The output must be followed by a new line, and you have to flush Standard Output.**</font>
Otherwise, the submission might be judged as TLE.
<font color="red">**Note that the input for the $d+1$-th container will not be given until the $d$-th output is given. **</font>

After all containers have been stored, determine the order in which the containers are to be transported out.
Let $(qi_k, qj_k)$ be the coordinates of the $k$-th container to be transported out. Then, output to Standard Output in the following format.

```plain
$qi_0$ $qj_0$
$qi_1$ $qj_1$
$\vdots$
$qi_{D^2-2-N}$ $qj_{D^2-2-N}$
```

Your program may output comment lines starting with #. The web version of the visualizer displays the comment lines at the corresponding timing, which may be useful for debugging and analysis. Since the judge program ignores all comment lines, you can submit a program that outputs comment lines as is.

### 例

$d$
Input
Output

Prior information
```plain
9 0
```

0
```plain
16
```
```plain
8 0
```

1
```plain
13
```
```plain
8 8
```

$\vdots$

79
```plain
34
```
```plain
0 5
```

Transporting order

```plain
0 3
0 5
0 2
$\vdots$
8 8
```

[Show example](https://img.atcoder.jp/toyota2023summer-final/TqK1K6OG.html?lang=en&amp;seed=0&amp;output=sample)

## Input Generation

The number of obstacles $N$ is generated uniformly at random from integers between $0$ and $D$, inclusive.
A distinct set of $N$ coordinates for the obstacles are randomly chosen from squares other than the entrance and its three adjacent squares.
The numbers $t_0,\cdots,t_{D^2-2-N}$ assigned to the containers are generated by randomly shuffling $0,1,\cdots,D^2-2-N$.

## Tools (Input generator and visualizer)

- [Web version](https://img.atcoder.jp/toyota2023summer-final/TqK1K6OG.html?lang=en): This is more powerful than the local version providing animations and manual play.
- [Local version](https://img.atcoder.jp/toyota2023summer-final/TqK1K6OG.zip): You need a compilation environment of [Rust language](https://www.rust-lang.org/).-   - [Pre-compiled binary for Windows](https://img.atcoder.jp/toyota2023summer-final/TqK1K6OG_windows.zip): If you are not familiar with the Rust language environment, please use this instead.

Please be aware that sharing visualization results or discussing solutions/ideas during the contest is prohibited.