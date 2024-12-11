## Problem Statement

There is a rectangular piece of land with size $H \times W$.
This land is divided into square **blocks** of size $1 \times 1$, and some of the boundaries between the blocks are separated by **waterways**.
The border of the land is surrounded by fences except for a single **entrance**, which is the only way to enter or exit the land.
The entrance is set on one side of a single block.

![](data:image/png;base64,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)

You plan to grow **crops** on this land.
When planting or harvesting crops, you will need to move agricultural machinery from the entrance to the block you plan to work on.
However, there are no fixed pathways set as the passage for the machinery.

As it would be a challenging task to establish the pathways now, you have decided to move the machinery through the blocks which are not currently being used for growing crops.
In other words, when planting or harvesting crops in a particular block, it must be possible to reach to the block from the entrance while satisfying the following conditions:

- You can only move to the four adjacent blocks from each block (moving diagonally is not allowed).
- Yon cannot move from one block to another if they are separated by a waterway.
- You may not pass through blocks which are currently being used for growing crops.

There are $K$ kinds of crops available for planting, numbered $1, 2, \dots, K$.
You are to choose some of them to be planted and harvested in the following $T$ months.
To plant crop $k$, you will need to plant it **no later than** the $S_k$-th month, and harvest it **at** the $D_k$-th month.
You can plant crop $k$ before the $S_k$-th month, but even if you plant it earlier than required, you cannot harvest it before $D_k$-th month.

It is allowed to plant any kind of crop in any block, but one kind of crop cannot be planted in multiple blocks, and multiple kinds of crops cannot be planted in a single block.

Please make a planting plan which maximizes the utility of the land.

### Details of the land

The land has coordinates with the northwest corner at $(0, 0)$, the southwest corner at $(H, 0)$, the northeast corner at $(0, W)$, and the southeast corner at $(H, W)$.
The block at the $i+1$-th row from the north and the $j+1$-th column from the west is a square with diagonal points $(i, j)$ and $(i + 1, j + 1)$.
This square is referred to as block $(i, j)$ ($0 \le i \le H - 1$, $0 \le j \le W - 1$).

The entrance is set at the west side of block $(i_0, 0)$ (that is, on the segment between coordinates $(i_0, 0)$ and $(i_0 + 1, 0)$).

For the blocks which shares sides, whether there is a waterway between them is determined by the given input.
Please refer to the "Input" section for the details of the input format for the waterway.

### Details of the planting plan

A planting plan describes which crop are grown on which blocks, and when they are planted.
It is represented by a sequence $(k_1, i_1, j_1, s_1), \dots, (k_M, i_M, j_M, s_M)$.
The $m$-th element of this sequence signifies that crop $k_m$ is planted in block $(i_m, j_m)$ on the $s_m$-th month.

Based on a given planting plan, the following actions are taken on the $t$-th month ($t = 1, 2, \dots, T$).

1. At the beginning of the $t$-th month, for all $m$ where $s_m = t$, crop $k_m$ is planted in block $(i_m, j_m)$. During this process, $(i_m, j_m)$ must be reachable from the entrance without  crossing waterways or passing through blocks where crops are currently growing in.
2. At the end of the $t$-th month, for all $m$ where $D_{k_m} = t$, crop $k_m$ is harvested from block $(i_m, j_m)$. During this process, $(i_m, j_m)$ must be reachable from the entrance without  crossing waterways or passing through blocks where crops are currently growing in.

When planting multiple crops in a same month, the reachability condition above may depend on the order in which crops are planted.
For example, if crops $k_1$ and $k_2$ are to be planted in a same month, and $(i_2, j_2)$ cannot be reached without passing through $(i_1, j_1)$, then planting crop $k_1$ before $k_2$ blocks the way for planting $k_2$.

In this case, a planting plan is considered valid if there exists an order such that planting them by the order does not lead to the situation above.
Such an order will be calculated by the judging program, so it does not have to be determined in the output.
Similarly, when harvesting multiple crops in a same month, the order of the crops will be calculated by the judging program and does not have to be determined in the output.

The planting plan must satisfy the following conditions.

- The same crop can only be planted in the same block.
- A block can only contains at most one kind of crop at the same time.
- When planting crop $k$, it must be planted before $S_k$-th month.
- When planting or harvesting crop, the target crop must be reachable from the entrance.

Note that, it is not required to plant all the $K$ crops.

## Scoring

The score of crop $k$, $X_k$, is determined as the following rules.

1. If crop $k$ is not planted, then $X_k = 0$.
2. If crop $k$ is planted, then $X_k = D_k - S_k + 1$.

For each test case that received an AC verdict, the score of the test case will be $10^6 \times {\sum_{k = 1}^K X_k \over HWT}$ (this number will be an integer in all test cases used in provisional test and system test).
For each test case that received a not AC verdict, the score of the test case will be $0$.

In provisional test, if a submission receives AC in all test cases, the score of the submission will be the sum of the score of all test cases. Otherwise, the score of the submission will be $0$.

In system test, the score of the submission will be the sum of the score of all test cases.

The final standings will be determined by the system test which is conducted after the contest.
The system test will be performed only for the last submission which received a result other than CE.
Be careful not to make a mistake in the final submission.

### Number of test cases

- Provisional test: 50
- System test: 2000; We will publish [seeds.txt](https://img.atcoder.jp/ahc023/seeds.txt) (sha256=0c2ffe8037c0c232ed9775b89a892fc1f68709a1582c83fd6bb609244cefcf32) after the contest is over.

The test cases in the system test contains the same amount of test cases with $d = 1, 2, 3, 4$, where $d$ is a parameter used in generating the waterways (for details, please refer to the input generation).

### About execution time

Execution time may vary slightly from run to run. In addition, since system tests simultaneously perform a large number of executions, it has been observed that execution time increases by several percent compared to provisional tests. For these reasons, submissions that are very close to the time limit may result in TLE in the system test. Please measure the execution time in your program to terminate the process, or have enough margin in the execution time.

## Input

Input is given from Standard Input in the following format:

> $T$ $H$ $W$ $i_0$
> 
> $h_{0, 0}h_{0, 1}\cdots h_{0, W-1}$
> 
> $\vdots$
> 
> $h_{H-2, 0}h_{H-2, 1}\cdots h_{H-2, W-1}$
> 
> $v_{0, 0}v_{0, 1}\cdots v_{0, W-2}$
> 
> $\vdots$
> 
> $v_{H-1, 0}v_{H-1, 1}\cdots v_{H-1, W-2}$
> 
> $K$
> 
> $S_1$ $D_1$
> 
> $\vdots$
> 
> $S_K$ $D_K$

$h_{i, 0} \cdots h_{i, W-1}$ is a string of length $W$ consisting of only $0$ and $1$.
For block $(i, j)$, if there is a waterway on the south side (along the segment between coordinates $(i + 1, j)$ and $(i + 1, j + 1)$), then $h_{i, j} = 1$.
Otherwise, if there is no waterway, $h_{i, j} = 0$.

$v_{i, 0} \cdots v_{i, W-2}$ is a string of length $W - 1$ consisting of only $0$ and $1$.
For block $(i, j)$, if there is a waterway on the east side (along the segment between coordinates $(i, j + 1)$ and $(i + 1, j + 1)$), then $v_{i, j} = 1$.
Otherwise, if there is no waterway, $v_{i, j} = 0$.

The inputs of provisional test and system test are generated by the method described below in "Input Generation".
The inputs satisfy the following regulations.

- $T = 100$
- $H = W = 20$
- $0 \le i_0 \le H - 1$
- $0 &lt; K \le HWT$
- $1 \le S_k &lt; D_k \le T \quad (1 \le k \le K)$
- For any particular block, it is possible to reach it from the entrance by moving between adjacent blocks without crossing the waterway.

## Output

Let the number of crops to plant be $M$, $k_1, \dots, k_M$ be an arbitrary order of the crops to be planted, and crop $k_m$ is planned to be planted in block $(i_m, j_m)$ in the $s_m$-th month.

In this case, output to standard output (stdout) in the following format.

> $M$
> 
> $k_1$ $i_1$ $j_1$ $s_1$
> 
> $\vdots$
> 
> $k_M$ $i_M$ $j_M$ $s_M$

The output must meet the requirements described in the problem statement.
Otherwise, the test case will be judged as WA.

## Input Generation

Details

Let $\mathrm{rand}(L, U)$ be a function that generates a uniform random floating-point number at least L and less than U.
Let $\mathrm{normal}(\mu, \sigma^2)$ be a function that generates a random value from [the standard normal distribution](https://en.wikipedia.org/wiki/Normal_distribution#Standard_normal_distribution) with $\mu$ as its mean and $\sigma^2$ as its variance.

- $T = 100$
- $H = W = 20$
- Generate $i_0$ randomly from ${0, 1, \dots, H - 1}$.
- Let $G = (V, E)$ be the undirected graph with the lattice points on the land (including border) as its vertices, and segments of length $1$ connecting two lattice points as its edges. Formally, $V$ and $E$ are defined as the following:-   - $V = \lbrace(i, j) \mid 0 \le i \le H, 0 \le j \le W\rbrace$
-   - $E = \lbrace((i_1, j_1), (i_2, j_2)) \in V \times V \mid |i_1 - i_2| + |j_1 - j_2| = 1\rbrace$
- Generate the waterways in the following way.-   - $d = 1 + (\mathit{seed} \bmod 4)$
-   - Mark all vertices which locates on the border (that is, all $(i, j) \in V$ where $i = 0, i = H, j = 0$, or $j = W$ is satisfied).
-   - Repeat the following processes.-   -   - Let $V'$ be the set of vertices that is marked, and $V'' = \lbrace (i', j') \in V \mid \forall (i, j) \in V', |i - i'| + |j - j'| &amp;amp;gt; d \rbrace$.
-   -   - If $V''$ is empty, the process of generating waterways is ended. Otherwise, let $(i, j)$ be a element selected randomly from $V''$.
-   -   - Let $(i', j')$ be the vertex in $V'$ which is nearest to $(i, j)$. If there are multiple candidates of $(i', j')$, let $(i', j')$ be one of them randomly.
-   -   - Let $P$ be the shortest path in $G$ connecting $(i, j)$ and $(i', j')$. If there are multiple candidates of $P$, let $P$ be one of the paths having the least turning points. If there are still multiple (at most $2$) candidates of $P$, let $P$ be one of them randomly.
-   -   - Set all edges in $P$ to waterways.
-   -   - Mark all vertices in $P$.
- Let $L = \mathrm{round}(HWT \times \mathrm{rand(1.0, 2.0)})$. For $k = 1, 2, \dots$, repeat the following processes to generate $D_k$ and $S_k$.-   - Let $L_k = \mathrm{round}(10^{\mathrm{normal}(1, 0.25^2)})$. If $2 \le L_k \le T$ isn't satisfied, regenerate $L_k$.
-   - Generate $D_k$ randomly from ${L_k, L_k + 1, \dots, T}$.
-   - Let $S_k = D_k - L_k + 1$.
-   - If $\sum_{i = 1}^k L_i \ge L$, then the processes are ended.

## Tools

- [Web version](https://img.atcoder.jp/ahc023/5XtyY7PgVPtBANvV.html?lang=en): This is more powerful than the local version when displaying animations.
- [Local version](https://img.atcoder.jp/ahc023/asprocon10_5XtyY7PgVPtBANvV.zip): You need a compilation environment of [Rust language](https://www.rust-lang.org/).-   - [Pre-compiled binary for Windows](https://img.atcoder.jp/ahc023/asprocon10_5XtyY7PgVPtBANvV_windows.zip): If you are not familiar with the Rust language environment, please use this instead.
- [Sample code (C++)](https://img.atcoder.jp/ahc023/5XtyY7PgVPtBANvV_sample.zip): This sample code searches for a block to plant each crop, and choose the first one found.  Only the first $\min(K, 10)$ crops are considered.

<font color="red">**Sharing visualization results is not allowed until the end of the contest.**</font>

```input1
10 6 6 3
011010
000001
011000
000110
011000
00000
10001
10010
00110
10101
10000
20
2 10
1 10
4 10
1 10
2 9
4 5
2 8
4 10
4 9
1 9
1 3
1 6
1 7
3 6
8 10
1 7
3 8
2 8
1 10
2 10
```

```output1
12
1 0 0 2
2 0 1 1
3 1 0 4
4 0 2 1
5 3 1 2
6 2 0 4
7 4 0 2
10 3 2 1
15 2 0 8
18 5 0 2
19 0 3 1
20 4 1 2
```

This sample is only to show a concrete example of input/output, and is smaller than the actual test cases used for scoring.