## Story

Takahashi manages an event hall.
This event hall can be divided into several rectangular sections by installing partitions, and each section is rented out to different groups.

You are given a reservation status for several days.
For each reservation, the desired area of the section is specified, and if the area of the assigned section is less than the specified area, a cost will be incurred.
Additionally, installation and removal of partitions to change the divisions of sections incurs a cost based on the length of the partitions.
Please operate the event hall to minimize the total cost as much as possible.

## Problem Statement

There is an event hall represented as a grid whose vertical and horizontal lengths are both $W$.
Let $(0,0)$ be the coordinates of the top-left grid point, and $(i,j)$ be the coordinates of the grid point $i$ squares down and $j$ squares to the right from there.
The coordinates of the bottom-right grid point are $(W, W)$.

You are given a reservation status for $D$ days.
The number of reservations for each day are all $N$, and the $k=0,1,\cdots,N-1$-th reservation on day $d=0,1,\cdots,D-1$ desires to rent a rectangular section of at least area $a_{d,k}$.
The shape and position of the rented rectangles are flexible, but they must be parallel to the axes and each vertex must be a grid point.
Furthermore, rectangles for two different reservations on the same day must not have a positive area in common.
It is acceptable for there to be some vacant space that remains unrented.

Let $R_{d,k}$ be the rectangle for the $k$-th reservation on day $d$ and $b_{d,k}$ be its area.
If $a_{d,k} &gt; b_{d,k}$, a cost of $100\times (a_{d,k}-b_{d,k})$ is incurred.
If $a_{d,k}\leq b_{d,k}$, no cost is incurred.

Partitions must be installed along the part of the perimeter of each rectangle $R_{d,k}$ that do not lie on the perimeter of the grid, and conversely, partitions must not exist anywhere else.
On day $d$, you must install and remove partitions from the configuration of day $d-1$ to meet this condition.
If the total length of partitions installed and removed on day $d$ is $L_d$, a cost of $L_d$ is incurred.
However, as a special case, **we assume $L_0=0$ on the first day.**

More precisely, $L_d$ is computed as follows.
For each $d=0,\cdots,D-1$ and each horizontal line segment $(i,j)-(i,j+1)$ ($1\leq i\leq W-1, 0\leq j\leq W-1$) within the interior, excluding the perimeter of the grid, we define $H_{d,i,j}=1$ if it lies on the perimeter of any $R_{d,k}$, otherwise we define $H_{d,i,j}=0$.
Then 1 is added to $L_d$ for each $(i,j)$ such that $H_{d-1,i,j}\neq H_{d,i,j}$.
Similarly, for each vertical line segment $(i,j)-(i+1,j)$ ($0\leq i\leq W-1, 1\leq j\leq W-1$) that lies on the perimeter of any $R_{d,k}$,
we define $V_{d,i,j}=1$, and otherwise $V_{d,i,j}=0$.
Then 1 is added to $L_d$ for each $(i,j)$ such that $V_{d-1,i,j}\neq V_{d,i,j}$.

Your task is to determine the rectangular sections to be rented out so that the total cost is as small as possible.

## Scoring

When the total cost of $D$ days is $C$, you obtain an absolute score of $C+1$.
**The lower the absolute score, the better.**

For each test case, we compute the <font color="red">**relative score**</font> $\mathrm{round}(10^9\times \frac{\mathrm{MIN}}{\mathrm{YOUR}})$, where YOUR is your absolute score and MIN is the lowest absolute score among all competitors obtained on that test case. The score of the submission is the sum of the relative scores.

The final ranking will be determined by the system test with more inputs which will be run after the contest is over.
In both the provisional/system test, if your submission produces illegal output or exceeds the time limit for some test cases, only the score for those test cases will be zero, and your submission will be excluded from the MIN calculation for those test cases.

The system test will be performed only for <font color="red">**the last submission which received a result other than CE **</font>.
Be careful not to make a mistake in the final submission.

### Number of test cases

- Provisional test: 50
- System test: 2000. We will publish [seeds.txt](https://img.atcoder.jp/ahc031/seeds.txt) (sha256=16f021f46aad43a81ad05ebf38ed2b6ac813eafacbb6ad98549832218314db8f) after the contest is over.

### About relative evaluation system

In both the provisional/system test, the standings will be calculated using only the last submission which received a result other than CE.
Only the last submissions are used to calculate the MIN for each test case when calculating the relative scores.

The scores shown in the standings are relative, and whenever a new submission arrives, all relative scores are recalculated.
On the other hand, the score for each submission shown on the submissions page is the sum of the absolute score for each test case, and the relative scores are not shown.
In order to know the relative score of submission other than the latest one in the current standings, you need to resubmit it.
If your submission produces illegal output or exceeds the time limit for some test cases, the score shown on the submissions page will be 0, but the standings show the sum of the relative scores for the test cases that were answered correctly.

### About execution time

Execution time may vary slightly from run to run.
In addition, since system tests simultaneously perform a large number of executions, it has been observed that execution time increases by several percent compared to provisional tests.
For these reasons, submissions that are very close to the time limit may result in TLE in the system test.
Please measure the execution time in your program to terminate the process, or have enough margin in the execution time.

## Input

Input is given from Standard Input in the following format.

> $W$ $D$ $N$
> 
> $a_{0,0}$ $\cdots$ $a_{0,N-1}$
> 
> $\vdots$
> 
> $a_{D-1,0}$ $\cdots$ $a_{D-1,N-1}$

- The horizontal and vertical length of the grid $W$ is fixed at $W=1000$.
- The number of days $D$ satisfies $5\leq D\leq 50$.
- The number of reservations $N$ for each day satisfies $5\leq N\leq 50$.
- The desired area $a_{d,k}$ of the $k$-th reservation on day $d$ is an integer value satisfying $1\leq a_{d,0}\leq \cdots\leq a_{d,N-1}$ and its sum satisfies $a_{d,0}+\cdots+a_{d,N-1}\leq W^2$.

## Output

When renting out a rectangle whose top-left vertex has coordinates $(i_{d,k},j_{d,k})$ and whose bottom-right vertex has coordinates $(i_{d,k}',j_{d,k}')$ for the $k$-th reservation on day $d$, output to Standard Output in the following format.

> $i_{0,0}$ $j_{0,0}$ $i_{0,0}'$ $j_{0,0}'$
> 
> $\vdots$
> 
> $i_{0,N-1}$ $j_{0,N-1}$ $i_{0,N-1}'$ $j_{0,N-1}'$
> 
> $\vdots$
> 
> $i_{D-1,0}$ $j_{D-1,0}$ $i_{D-1,0}'$ $j_{D-1,0}'$
> 
> $\vdots$
> 
> $i_{D-1,N-1}$ $j_{D-1,N-1}$ $i_{D-1,N-1}'$ $j_{D-1,N-1}'$

Each rectangle must satisfy $0\leq i_{d,k}\lt i_{d,k}'\leq W$ and $0\leq j_{d,k}\lt j_{d,k}'\leq W$.
If this condition is not met, the submission will be judged as WA.

[Show example](https://img.atcoder.jp/ahc031/PJcas1sL.html?lang=en&amp;seed=0&amp;output=sample)

## Sample Solution

This is a sample solution in Python.
The program outputs the $k$-th rectangle with the top left $(k,0)$ and the bottom right $(k+1,W)$.

> # read input
> 
> W, D, N = map(int, input().split())
> 
> a = []
> 
> for d in range(D):
> 
>     a.append(list(map(int, input().split())))
> 
> 
> 
> # determine rectangles
> 
> rect = [[] for _ in range(D)]
> 
> for d in range(D):
> 
>     for k in range(N):
> 
>         rect[d].append((k, 0, k + 1, W))
> 
> 
> 
> # output
> 
> for d in range(D):
> 
>     for k in range(N):
> 
>         i0, j0, i1, j1 = rect[d][k]
> 
>         print(i0, j0, i1, j1)

## Input Generation

Let $\mathrm{rand}(L,U)$ be a function that generates a uniform random integer between $L$ and $U$, inclusive.

We generate the number of days $D$ by $D=\mathrm{rand}(5,50)$.
We generate the number of reservations $N$ for each day by $N=\mathrm{rand}(5,50)$.
A parameter $e$ is generated by $e=\mathrm{rand}(500,5000)/10000$ and we set the average free area $E$ to $E=\mathrm{round}(W^2 e^2)$.
For each $d=0,\cdots,D-1$, we generate $a_{d,0},\cdots,a_{d,N-1}$ as follows

First, we generate $T_d=\mathrm{rand}(W^2-\mathrm{floor}(\frac{3E}{2}),W^2-\mathrm{floor}(\frac{E}{2}))$.
Next, starting from the set $S=\{0,T_d\}$, generate $\mathrm{rand}(1,T_d-1)$ and add it to $S$ until the number of elements in $S$ becomes $N+1$.
Let $s_0(=0),s_1,\cdots,s_{N-1},s_N(=T_d)$ be the elements of the resulting $S$, in ascending order.
Then we set $a_{d,k}=s_{k+1}-s_k$.
Finally, sort $a_{d,0},\cdots,a_{d,N-1}$ in ascending order.

## Tools (Input generator and visualizer)

- [Web version](https://img.atcoder.jp/ahc031/PJcas1sL.html?lang=en): This is more powerful than the local version providing animations.
- [Local version](https://img.atcoder.jp/ahc031/PJcas1sL.zip): You need a compilation environment of [Rust language](https://www.rust-lang.org/).-   - [Pre-compiled binary for Windows](https://img.atcoder.jp/ahc031/PJcas1sL_windows.zip): If you are not familiar with the Rust language environment, please use this instead.

Please be aware that sharing visualization results or discussing solutions/ideas during the contest is prohibited.

```input1
1000 5 10
6508 11666 12167 16717 46095 55928 56542 127260 200961 202211
11754 15667 26620 31851 48890 50181 52520 53150 263650 280526
7171 7218 14268 26231 37133 47199 93385 131356 174634 189807
10290 15811 16235 39805 45168 75830 76161 137648 148368 152504
6553 22994 44284 45120 67646 68899 98726 129109 138615 247097
```

```output1
0 43 23 326
747 654 824 843
863 2 1000 469
824 621 892 869
892 469 983 977
23 19 676 105
58 917 742 1000
494 398 747 917
85 105 863 398
6 398 403 911
166 917 329 1000
6 848 266 911
403 803 588 1000
863 633 983 977
361 19 494 398
361 398 494 803
494 105 588 767
863 0 1000 633
588 0 863 1000
0 19 361 848
10 740 81 841
949 196 1000 425
538 396 588 764
883 425 988 748
0 0 189 268
0 268 189 540
588 396 883 764
515 76 949 396
81 767 873 1000
189 0 515 583
363 460 538 767
363 767 600 923
762 767 873 923
288 923 807 1000
0 0 1000 76
188 397 363 832
10 376 188 841
0 76 462 376
515 76 949 425
538 425 988 764
10 376 86 736
288 452 330 1000
1 76 243 265
349 283 604 460
86 397 288 736
0 736 288 1000
243 8 604 283
330 520 600 1000
600 638 1000 1000
604 0 1000 638
```