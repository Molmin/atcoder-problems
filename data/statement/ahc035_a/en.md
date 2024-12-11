## Story

AtCoder is working on improving the breeds of grain. The grain has multiple evaluation criteria such as taste, yield, and disease resistance. CEO Takahashi aims to create grain that excels in all evaluation criteria.

By planting grain seeds in a grid-like field, new seeds can be harvested one year later that randomly inherit the value of each evaluation criterion from two adjacent seeds. By repeating the planting and harvesting process several times, please create the best possible grain seeds.

## Problem Statement

There is a field represented by an $N \times N$ grid.
Let $(0, 0)$ be the coordinates of the top-left square, and $(i, j)$ be the coordinates of the square located $i$ squares down and $j$ squares to the right from there.

You are given $2N(N-1)$ grain seeds. 
There are $M$ evaluation criteria, and each seed $k$ has a non-negative integer vector, called the evaluation vector, $\boldsymbol{x_k}=(x_{k,0}, x_{k,1}, \cdots, x_{k,M-1})$, representing the goodness for each criterion. 
The value $V_k$ of seed $k$ is defined as $V_k=\sum_{l=0}^{M-1}x_{k,l}$.

Repeat the following operation $T$ times to maximize the maximum value $\max (V_0, V_1, \cdots, V_{2N(N-1)-1})$ of the seeds you have.

- Plant one seed in each of the $N^2$ squares of the field. The same seed cannot be planted in multiple squares, and the remaining $2N(N-1)-N^2$ seeds that are not planted will be discarded. Then, for each pair of seeds $(k, k')$ planted in adjacent squares (up, down, left, or right), a new seed with a new evaluation vector will be generated. The value of the $l$-th element of this new evaluation vector is chosen uniformly at random from the original values $x_{k,l}$ and $x_{k',l}$. The $2N(N-1)$ seeds generated in this way will become the new set of seeds you have.

Example of generating new seeds
For example, when $M=3$, consider planting seed $0$ in square $(0, 0)$ and seed $1$ in square $(0, 1)$. 
If the evaluation vector of seed $0$ is $\boldsymbol{x_0}=(1, 2, 3)$ and the evaluation vector of seed $1$ is $\boldsymbol{x_1}=(4, 5, 6)$, the possible evaluation vectors for the new seed are the following $8$ possibilities:

- $(1, 2, 3)$
- $(1, 2, 6)$
- $(1, 5, 3)$
- $(1, 5, 6)$
- $(4, 2, 3)$
- $(4, 2, 6)$
- $(4, 5, 3)$
- $(4, 5, 6)$

One of these $8$ evaluation vectors is chosen uniformly at random and becomes the evaluation vector for the new seed.

## Scoring

For the initially given $2N(N-1)$ seeds, let the maximum value of the $l$-th element of the evaluation vectors be $X_l=\max(x_{0,l}, x_{1,l}, \cdots, x_{2N(N-1)-1,l})$. 
After $T$ operations, let the maximum value of the values of the seeds you have be $W=\max(V_0, V_1, \cdots, V_{2N(N-1)-1})$. 
Then you will obtain a score of $\mathrm{round}(10^6 \times W / \sum_{l=0}^{M-1}{X_l})$.

There are 300 test cases, and the score of a submission is the total score for each test case.
If your submission produces an illegal output or exceeds the time limit for some test cases, the submission itself will be judged as WA or TLE , and the score of the submission will be zero.
The highest score obtained during the contest will determine the final ranking, and there will be no system test after the contest.
If more than one participant gets the same score, they will be ranked in the same place regardless of the submission time.

## Input and Output

**Note: This problem is interactive. Read the following explanation, and communicate with the judge program accordingly.**

First, you will be given the grid size $N$, the number of evaluation criteria $M$, the number of operations $T$, and the evaluation vectors $\boldsymbol{x_k}=(x_{k,0}, x_{k,1}, \cdots, x_{k,M-1})$ in the following format from Standard Input.

```plain
$N$ $M$ $T$
$x_{0,0}$ $\cdots$ $x_{0,M-1}$
$\vdots$
$x_{2N(N-1)-1,0}$ $\cdots$ $x_{2N(N-1)-1,M-1}$
```

The input satisfies the following constraints:

- $N=6$
- $M=15$
- $T=10$
- $0 \le x_{k,l} \le 100$
- All inputs are integers

After reading the above information, repeat the following process for $T$ turns.

In each turn, first output to Standard Output which seed to plant in each square in the following format.

```plain
$A_{0,0}$ $\cdots$ $A_{0,N-1}$
$\vdots$
$A_{N-1,0}$ $\cdots$ $A_{N-1,N-1}$
```

Here, $A_{i,j}$ represents the number of the seed to be planted in square $(i,j)$ and must be an integer satisfying $0 \le A_{i,j} &lt; 2N(N-1)$. The same $A_{i,j}$ must not be output more than once in the same turn.

After the output, the evaluation vectors of the newly generated $2N(N-1)$ seeds will be given from Standard Input in the following format.

```plain
$x_{0,0}$ $\cdots$ $x_{0,M-1}$
$\vdots$
$x_{2N(N-1)-1,0}$ $\cdots$ $x_{2N(N-1)-1,M-1}$
```

Here, each element of the evaluation vectors is an integer satisfying $0 \le x_{k,l} \le 100$.

**Each line of the output should end with a new line, and you have to flush Standard Output.**
Otherwise, the submission might be judged as TLE.

Your program may output comment lines starting with `#`. The web version of the visualizer displays the comment lines with the corresponding timings, which may be useful for debugging and analysis. Since the judge program ignores all comment lines, you can submit a program that outputs comment lines as is.

## Example

Note that the following is an example input for explanatory purposes and does not meet the input constraints.

TurnOutputInput

Prior information

```plain
3 5 10
42 45 29 50 53
19 35 91 0 11
35 83 30 9 31
28 18 20 28 88
0 52 21 66 51
24 9 35 10 89
57 27 13 73 24
22 2 5 78 59
66 67 27 18 12
81 38 24 21 32
89 21 32 16 19
6 27 9 67 68
```

0
```plain
5 4 7
8 9 0
11 2 6
```
```plain
0 52 21 10 89
0 52 21 78 59
66 67 24 18 32
81 38 24 50 32
6 27 30 67 31
57 27 13 73 24
24 9 27 10 12
81 52 24 21 51
42 45 5 50 53
66 27 27 67 68
35 83 30 9 31
42 27 13 73 53
```

1
```plain
6 8 11
3 9 1
7 2 5
```
```plain
42 45 5 10 12
42 45 13 73 53
66 38 24 50 32
66 52 27 67 68
81 52 24 18 32
66 67 13 18 32
81 38 27 10 12
42 27 5 50 68
0 52 13 78 53
81 52 24 50 32
66 67 27 67 32
0 52 13 78 59
```

$\vdots$

9
```plain
2 6 10
8 1 9
11 4 3
```
```plain
42 27 5 50 68
42 27 5 50 32
0 67 27 50 68
42 27 5 50 68
42 27 24 50 32
42 67 5 50 68
42 67 24 50 68
42 27 27 50 68
0 27 5 50 32
0 67 24 50 68
42 67 5 50 68
42 27 5 50 32
```

In this example, since $W=V_6=42+67+24+50+68=251$ and $\sum_{l=0}^{M-1}{X_l}=89+83+91+78+89=430$, you will obtain a score of $583721$.

[Show example](https://img.atcoder.jp/ahc035/F5dI2O6U.html?lang=en&amp;seed=0&amp;output=sample)

## Sample Solution (Python)

Here is a sample solution in Python. The program outputs the 0th through 35th seeds in order from the top left to the bottom right.

```plain
N, M, T = map(int, input().split())
SEED_COUNT = 2 * N * (N - 1)
X = []

for i in range(SEED_COUNT):
    X.append(list(map(int, input().split())))

for t in range(T):
    A = [[0] * N for i in range(N)]

    for i in range(N):
        for j in range(N):
            A[i][j] = i * N + j

    for i in range(N):
        print(' '.join(map(str, A[i])), flush=True)

    X = []

    for i in range(SEED_COUNT):
        X.append(list(map(int, input().split())))
```

## Sample Solution (C++)

Here is a sample solution in C++. The program outputs the 0th through 35th seeds in order from the top left to the bottom right.
```plain
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int N, M, T;
    cin >> N >> M >> T;

    int seed_count = 2 * N * (N - 1);
    vector<vector<int>> X(seed_count, vector<int>(M, 0));

    for (int i = 0; i < seed_count; i++) {
        for (int j = 0; j < M; j++) {
            cin >> X[i][j];
        }
    }

    for (int t = 0; t < T; t++) {
        vector<vector<int>> A(N, vector<int>(N, 0));

        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                A[i][j] = i * N + j;
            }
        }

        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                cout << A[i][j];

                if (j < N - 1) {
                    cout << " ";
                } else {
                    cout << endl;
                }
            }
        }

        cout.flush();

        for (int i = 0; i < seed_count; i++) {
            for (int j = 0; j < M; j++) {
                cin >> X[i][j];
            }
        }
    }

    return 0;
}
```

## Input Generation

Define a function $\mathrm{randnormal}()$ to generate values from the [standard normal distribution](https://en.wikipedia.org/wiki/Normal_distribution#Standard_normal_distribution).

For each $k=0, 1, \cdots, 2N(N-1)$, generate $\boldsymbol{x_k}=(x_{k,0}, x_{k,1}, \cdots, x_{k,M-1})$ as follows.

Generate an $M$-dimensional vector $(x_{k,0}',\cdots,x_{k,M-1}')$ by $x_{k,l}'=|\mathrm{randnormal}()|$. Let $p_k=\frac{100}{\sqrt{\sum_{l=0}^{M-1}x_{k,l}'^2}}$ and define $x_{k,l}=\mathrm{round}(p_k x_{k,l}')$.

## Tools (Input generator, local tester and visualizer)

- [Web version](https://img.atcoder.jp/ahc035/F5dI2O6U.html?lang=en): This is more powerful than the local version and can display animations.
- [Local version](https://img.atcoder.jp/ahc035/F5dI2O6U.zip): You need a compilation environment of [Rust language](https://www.rust-lang.org/).-   - [Pre-compiled binary for Windows](https://img.atcoder.jp/ahc035/F5dI2O6U_windows.zip): If you are not familiar with the Rust language environment, please use this instead.

Please be aware that sharing visualization results or discussing solutions/ideas during the contest is prohibited.

### Specification of input files used by the tools

Input files given to the local tester have the following format.

```plain
$N$ $M$ $T$
$x_{0,0}$ $\cdots$ $x_{0,M-1}$
$\vdots$
$x_{2N(N-1)-1,0}$ $\cdots$ $x_{2N(N-1)-1,M-1}$
$u_{0,0,0}$ $\cdots$ $u_{0,0,N-2}$
$\vdots$
$u_{0,N-1,0}$ $\cdots$ $u_{0,N-1,N-2}$
$v_{0,0,0}$ $\cdots$ $v_{0,0,N-1}$
$\vdots$
$v_{0,N-2,0}$ $\cdots$ $v_{0,N-2,N-1}$
$\vdots$
$u_{T-1,0,0}$ $\cdots$ $u_{T-1,0,N-2}$
$\vdots$
$u_{T-1,N-1,0}$ $\cdots$ $u_{T-1,N-1,N-2}$
$v_{T-1,0,0}$ $\cdots$ $v_{T-1,0,N-1}$
$\vdots$
$v_{T-1,N-2,0}$ $\cdots$ $v_{T-1,N-2,N-1}$
```

Here, $u_{t,i,j}$ and $v_{t,i,j}$ are $M$-character strings consisting of `0` and `1`, and they mean the following:

- If the $l$-th character of $u_{t,i,j}$ is `0`, the $l$-th element of the evaluation vector of the new seed generated from the seeds $A_{i,j}$ and $A_{i,j+1}$ planted in $(i,j)$ and $(i, j+1)$ for the $t$-th operation will be $x_{A_{i,j},l}$; if it is `1`, it will be $x_{A_{i,j+1},l}$.
- If the $l$-th character of $v_{t,i,j}$ is `0`, the $l$-th element of the evaluation vector of the new seed generated from the seeds $A_{i,j}$ and $A_{i+1,j}$ planted in $(i,j)$ and $(i+1, j)$ for the $t$-th operation will be $x_{A_{i,j},l}$; if it is `1`, it will be $x_{A_{i+1,j},l}$.