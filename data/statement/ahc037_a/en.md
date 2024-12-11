## Story

You work in a beverage factory.  In this factory, a large quantity of drinking water is prepared, and carbonated beverages, the final products, are made by adding syrup and carbon dioxide.  By varying the amounts of syrup and carbon dioxide added, multiple variants of carbonated beverages can be produced.  Furthermore, it is possible to add syrup or carbon dioxide to already made beverages to make other variants.

Given multiple combinations of desired sweetness and carbonation levels of the beverages you want to make, find an efficient way to produce them.

## Problem Statement

The **sweetness** and **carbonation level** of beverages are represented by non-negative integers.  A beverage with sweetness $x$ and carbonation level $y$ is denoted by $(x, y)$.

Initially you only have beverage $(0, 0)$.  Below we write $S$ for the set of beverages already made.  Initially $S = \{(0, 0)\}$.

You can repeat the following operation to make multiple beverages.

- Choose an already made beverage $(x, y) \in S$.
- Choose integers $x', y'$ such that $x' \ge x$ and $y' \ge y$.
- Divide beverage $(x, y)$ into two containers, and keep one of them.  Make a new beverage $(x', y')$ by adding the appropriate amount of syrup and carbon dioxide to the other.  Add $(x', y')$ to $S$.-   - Notice that $(x, y)$ will **not** be removed from $S$.
- This operation costs $(x' - x) + (y' - y)$.

Given $N$ beverages $(A_1, B_1), \dots, (A_N, B_N)$ in the input, you can perform the above operation up to $5N$ times.  Find a sequence of operations that makes all of the specified beverages (that is, a sequence of operations such that $(A_i, B_i) \in S$ holds for all $i \in \{1, 2, \dots, N\}$ after all operations) with the total cost as small as possible.  It is allowed to make beverages not present in the input during the process.

## Scoring

Let $C$ be the total cost, and $L = \max\{A_1, B_1, A_2, B_2, \dots, A_N, B_N\}$.  Then the score is given by $\mathrm{round}\left(10^6 \times \frac{NL}{1 + C}\right)$.

There are $150$ test cases, and the score of a submission is the total score for each test case.
If your submission produces an illegal output or exceeds the time limit for some test cases, the submission itself will be judged as WA or TLE.
The highest score obtained during the contest will determine the final ranking, and there will be no system test after the contest.
If more than one participant gets the same score, they will be ranked in the same place regardless of the submission time.

## Input

Input is given from standard input in the following format:

> $N$
> 
> $A_1$ $B_1$
> 
> $\vdots$
> 
> $A_N$ $B_N$

All values are integers, and the input satisfies the following constraints:

- $N = 1000$
- $0 \le A_i &lt; 10^9$
- $0 \le B_i &lt; 10^9$
- $A_1, A_2, \dots, A_N$ are pairwise distinct
- $B_1, B_2, \dots, B_N$ are pairwise distinct
- there exists $i$ such that $A_i = 0$
- there exists $i$ such that $B_i = 0$

## Output

Let $M$ be the number of operations, and suppose that $m$-th operation makes $(x'_m, y'_m)$ from $(x_m, y_m)$.  Then, output to standard output in the following format:

> $M$
> 
> $x_1$ $y_1$ $x'_1$ $y'_1$
> 
> $\vdots$
> 
> $x_M$ $y_M$ $x'_M$ $y'_M$

All values should be integers, and satisfy the following conditions:

- $0 \le M \le 5N$
- $0 \le x_m \le x'_m &lt; 10^9$ and $0 \le y_m \le y'_m &lt; 10^9$
- if $(x_m, y_m) \ne (0, 0)$, then there exists $k &lt; m$ such that $(x_m, y_m) = (x'_k, y'_k)$
- if $(A_i, B_i) \ne (0, 0)$, then there exists $m$ such that $(A_i, B_i) = (x'_m, y'_m)$

It is possible to prove that if there is a sequence of operations with cost $C$ that satisfies all the conditions except $M \le 5N$, then there is a sequence of operations with cost at most $C$ that satisfies all the conditions including $M \le 5N$.

[Show example](https://img.atcoder.jp/ahc037/WneGTzJP.html?lang=en&amp;seed=0&amp;output=sample)

## Input Generation

Let $N = 1000$.

$A_1, \dots, A_N$ are generated as follows:

- Let $a_1 = 0$, and generate pairwise distinct integers $a_2, \dots, a_N$ between $1$ (inclusive) and $10^9$ (exclusive) uniformly at random.
- Let $A_1, \dots, A_N$ be a random permutation of $a_1, \dots, a_N$.

$B_1, \dots, B_N$ are generated in the same manner.

## Tools (Input generator and visualizer)

- [Web version](https://img.atcoder.jp/ahc037/WneGTzJP.html?lang=en): This is more powerful than the local version providing animations.
- [Local version](https://img.atcoder.jp/ahc037/WneGTzJP.zip): You need a compilation environment of [Rust language](https://www.rust-lang.org/).-   - [Pre-compiled binary for Windows](https://img.atcoder.jp/ahc037/WneGTzJP_windows.zip): If you are not familiar with the Rust language environment, please use this instead.

Please be aware that sharing visualization results or discussing solutions/ideas during the contest is prohibited.

```input1
4
0 6
2 5
3 2
4 0
```

```output1
6
0 0 2 0
0 0 0 6
2 0 4 0
2 0 2 2
2 2 3 2
2 2 2 5
```

This is an example for illustrative purposes, and does not satisfy the constraints on input.

The beverages you want to make are $(0, 6), (2, 5), (3, 2), (4, 0)$.  Let $S$ be the set of beverages already made, as in the problem statement.

- The first operation makes $(2, 0)$ from $(0, 0)$, and costs $2$.-   - After this operation, $S = \{(0, 0), (2, 0)\}$.
- The second operation makes $(0, 6)$ from $(0, 0)$, and costs $6$.-   - After this operation, $S = \{(0, 0), (2, 0), (0, 6)\}$.
- The third operation makes $(4, 0)$ from $(2, 0)$, and costs $2$.-   - After this operation, $S = \{(0, 0), (2, 0), (0, 6), (4, 0)\}$.
- The fourth operation makes $(2, 2)$ from $(2, 0)$, and costs $2$.-   - After this operation, $S = \{(0, 0), (2, 0), (0, 6), (4, 0), (2, 2)\}$.
- The fifth operation makes $(3, 2)$ from $(2, 2)$, and costs $1$.-   - After this operation, $S = \{(0, 0), (2, 0), (0, 6), (4, 0), (2, 2), (3, 2)\}$.
- The sixth operation makes $(2, 5)$ from $(2, 2)$, and costs $3$.-   - After this operation, $S = \{(0, 0), (2, 0), (0, 6), (4, 0), (2, 2), (3, 2), (2, 5)\}$.

Finally, $S$ contains all of $(0, 6), (2, 5), (3, 2), (4, 0)$, so this output will be judged as AC.

The total cost is $16$.  Since $C = 16, L = 6, N = 4$, the score is
$\mathrm{round}\left(10^6 \times \frac{6 \times 4}{1 + 16}\right) = 1411765$.