## Problem Statement

There is an island consisting of $N\times N$ squares.
Let $(0, 0)$ be the coordinates of the top-left square, and $(i, j)$ be the coordinates of the square located $i$ squares down and $j$ squares to the right from there.
According to Mr. Takahashi, the fortune teller, there are $M$ unexplored oil fields under the island.

Each oil field has a connected [polyomino](https://en.wikipedia.org/wiki/Polyomino) shape with the sides of a 1×1 square connected to each other, and its shape and orientation are also known in advance by divination. However, their exact location on the island remains unknown.
Each oil field is entirely contained within the $N\times N$ squares, but multiple oil fields may overlap and share the same square.
For each $(i,j)$ square, define **oil reserves** $v(i,j)$ as the number of oil fields containing that square.
Repeat the following three types of operations at most $2 N^2$ times.

- Choose one square and drill underground in that square. The value of $v(i,j)$ is revealed, incurring a cost of 1.
- Choose a set $S$ of two or more squares and divine the sum of the oil reserves in those squares $v(S)=\sum_{(i,j)\in S} v(i,j)$. The larger the number of squares to select, the lower the cost, and selecting $k$ squares costs $1/\sqrt{k}$. On the other hand, the variance of the value obtained by divination increases in proportion to $k$. Let $x$ be the value sampled from the following normal distribution with mean $\mu$ and variance $\sigma^2$, using an error parameter $\epsilon$ given in advance. Then the obtained value is $\max(0,\mathrm{round}(x))$.-   - Mean $\mu = (k-v(S))\epsilon + v(S)(1-\epsilon)$
-   - Variance $\sigma^2 = k\epsilon (1-\epsilon)$
- Guess all squares such that $v(i,j) &gt; 0$. If the answer is correct, the operation ends there; if it is incorrect, the operation continues at a cost of 1.

Please identify all squares such that $v(i,j) &gt; 0$ with as little cost as possible.

## Scoring

If you succeed in identifying all squares such that $v(i,j) &gt; 0$ within the specified number of operations, you obtain an absolute score of $\mathrm{round}(10^6\times \max(C, 1/N))$, where $C$ is the sum of the costs you paid.
If you fail, you will get an absolute score of $10^9$.
The lower the absolute score, the better.

For each test case, we compute the <font color="red">**relative score**</font> $\mathrm{round}(10^9\times \frac{\mathrm{MIN}}{\mathrm{YOUR}})$, where YOUR is your absolute score and MIN is the lowest absolute score among all competitors obtained on that test case. The score of the submission is the sum of the relative scores.

The final ranking will be determined by the system test with more inputs which will be run after the contest is over.
In both the provisional/system test, if your submission produces illegal output or exceeds the time limit for some test cases, only the score for those test cases will be zero, and your submission will be excluded from the MIN calculation for those test cases.

The system test will be performed only for <font color="red">**the last submission which received a result other than CE **</font>.
Be careful not to make a mistake in the final submission.

### Number of test cases

- Provisional test: 50
- System test: 3000. We will publish [seeds.txt](https://img.atcoder.jp/ahc030/seeds.txt) (sha256=45933552af3c557ff53d4e1397ef9fe10cedea89f10fe8140ceb489569dacea2) after the contest is over.

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

## Input and Output

First, the island size $N$, the number of oil fields $M$, the error parameter $\epsilon$, and the shape of each oil field are given from the Standard Input in the following format.

```plain
$N$ $M$ $\epsilon$
$d_1$ $i_{1,1}$ $j_{1,1}$ $\cdots$ $i_{1,d_1}$ $j_{1,d_1}$
$\vdots$
$d_M$ $i_{M,1}$ $j_{M,1}$ $\cdots$ $i_{M,d_M}$ $j_{M,d_M}$
```

- The island size $N$ satisfies $10\leq N\leq 20$.
- The number of oil fields $M$ satisfies $2\leq M\leq 20$.
- The error parameter $\epsilon$ satisfies $0.01\leq \epsilon\leq 0.2$ and is a multiple of $0.01$.
- The $d_k$ denotes the area of the $k$-th oil field and satisfies $4\leq d_k\leq N^2/M$. The subsequent $d_k$ coordinates $(i_{k,1},j_{k,1}),\cdots,(i_{k,d_k},j_{k,d_k})$ represent the coordinates of each square in the polyomino when translated so that the top and left coordinates are both $0$. For example, a $2\times 2$ square-shaped polyomino is represented as `4 0 0 0 1 1 0 1 1`.
- It is possible that multiple oil fields may have exactly the same shape.

After reading the above information, repeat the following process at most $2 N^2$ times.
In each iteration, do the following according to the type of operation to be performed.

If you choose one square $(i, j)$ and drill underground in that square, output to Standard Output in the following format.

```plain
q 1 $i$ $j$
```

After output, the value of $v(i,j)$ is given in one line from Standard Input.
You may drill an already drilled square again, although it has no particular advantage.

If you choose a set $S=\{(i_1,j_1),\cdots,(i_d,j_d)\}$ of $d (\geq 2)$ squares and divine $v(S)$, output to Standard Output in the following format.

```plain
q $d$ $i_1$ $j_1$ $\cdots$ $i_d$ $j_d$
```

Here, each coordinate $(i_k,j_k)$ must be distinct from the others. If the set contains the same coordinate more than once, it is judged as WA.
After output, an **approximation** of the value of $v(S)$ is given in one line from the standard input.

If you can guess all the squares with $v(i,j) &gt; 0$, let $S=\{(i_1,j_1),\cdots,(i_d,j_d)\}$ be the set of squares you determined to have $v(i,j) &gt; 0$ and output it to Standard Output in the following format.

```plain
a $d$ $i_1$ $j_1$ $\cdots$ $i_d$ $j_d$
```

Here, the output set $S$ must include all squares which have already been revealed to have oil reserves by drilling underground through the first operation.
Each coordinate $(i_k,j_k)$ must be distinct from the others. If the set contains the same coordinate more than once, it is judged as WA.
After the output, `1` is given in one line from the standard input if the guessed set is correct, and `0` if it is wrong.
If `1` is returned, the subsequent queries are not processed, and you should immediately terminate the execution of the program.
If `0` is returned, you can perform additional operations up to the limit and try again.

<font color="red">**The output must be followed by a new line, and you have to flush Standard Output.**</font>
Otherwise, the submission might be judged as TLE.

Your program may output comment lines starting with `#`. The web version of the visualizer displays the comment lines at the corresponding timing, which may be useful for debugging and analysis. Since the judge program ignores all comment lines, you can submit a program that outputs comment lines as is.
Among the comments, those starting with `#c` are treated specially and can be output in the form of `#c i j color` to let the visualizer change the color of each square arbitrarily. For example, outputting `#c 0 1 red` or `#c 0 1 #ff0000` will change the color of $(0,1)$ to red.

### Example

$t$
Output
Input

Prior Information

```plain
15 2 0.01
19 0 3 1 1 1 3 1 6 2 0 2 1 2 2 2 3 2 4 2 5 2 6 3 1 3 2 3 3 3 4 3 5 4 1 4 2 4 4
19 0 1 1 1 2 1 3 1 3 2 3 3 3 4 4 1 4 2 5 0 5 1 5 2 5 3 6 1 6 2 6 3 7 1 7 3 8 3
```

1
```plain
q 25 0 0 0 1 0 2 ... 4 4
```
```plain
8
```

2
```plain
q 1 0 0
```
```plain
0
```

$\vdots$

185
```plain
a 38 2 3 2 10 3 1 ... 10 12
```
```plain
1
```

[Show example](https://img.atcoder.jp/ahc030/awGA15Om.html?lang=en&amp;seed=0&amp;output=sample)

## Sample Solution

This is a sample solution in Python.
This program drills all the squares in order and outputs the squares that actually yielded oil at the end.

```plain
# read prior information
line = input().split()
N = int(line[0])
M = int(line[1])
eps = float(line[2])
fields = []
for _ in range(M):
    line = input().split()
    ps = []
    for i in range(int(line[0])):
        ps.append((int(line[2*i+1]), int(line[2*i+2])))
    fields.append(ps)

# drill every square
has_oil = []
for i in range(N):
    for j in range(N):
        print("q 1 {} {}".format(i, j))
        resp = input()
        if resp != "0":
            has_oil.append((i, j))

print("a {} {}".format(len(has_oil), ' '.join(map(lambda x: "{} {}".format(x[0], x[1]), has_oil))))
resp = input()
assert resp == "1"
```

## Input Generation

Let $\mathrm{rand}(L,U)$ be a function that generates a uniform random integer between $L$ and $U$, inclusive.

The island size $N$ is generated by $\mathrm{rand}(10,20)$.
The number of oil fields $M$ is generated by $\mathrm{rand}(2,\mathrm{floor}(N^2/20))$.
The error parameter $\epsilon$ is generated by $0.01\times \mathrm{rand}(1,20)$.

To generate the shape of each oil field, two parameters $a,d$ are first generated as follows.

- $a=\mathrm{floor}(\mathrm{rand}(\mathrm{floor}(N^2/5),\mathrm{floor(N^2/2)})/M)$
- $d=\mathrm{rand}(0,a-4)$

For each $k=1,\cdots,M$, the shape of the $k$-th oil field is generated as follows.
First, the size of the oil field is generated by $s_k=\mathrm{rand}(a-d,a+d)$.
Starting with $S_k=\{(\mathrm{floor}(N/2),\mathrm{floor}(N/2))\}$, add one square at a time, chosen uniformly at random from the set of squares adjacent to $S_k$, until the size of $S_k$ becomes $s_k$.
Finally, translate $S_k$ so that the minimum $i$ coordinate and the minimum $j$ coordinate of the squares contained in $S_k$ are both $0$.

After generating the shape of each oil field, the position of each oil field within the island is chosen uniformly at random, ensuring they do not extend beyond the island's boundaries.
In other words, given the maximum $i$ coordinate among the squares composing an oil field as $i_{\text{max}}$, and the maximum $j$ coordinate as $j_{\text{max}}$, generate $d_i=\mathrm{rand}(0,N-i_{\text{max}}-1)$ and $d_j=\mathrm{rand}(0,N-j_{\text{max}}-1)$. Then, position the oil field at the location shifted by $(d_i, d_j)$.

## Tools (Input generator, local tester, and visualizer)

- [Web version](https://img.atcoder.jp/ahc030/awGA15Om.html?lang=en): This is more powerful than the local version providing animations.
- [Local version](https://img.atcoder.jp/ahc030/awGA15Om_v3.zip): You need a compilation environment of [Rust language](https://www.rust-lang.org/).-   - [Pre-compiled binary for Windows](https://img.atcoder.jp/ahc030/awGA15Om_windows_v3.zip): If you are not familiar with the Rust language environment, please use this instead.

Please be aware that sharing visualization results or discussing solutions/ideas during the contest is prohibited.

### Specification of input/output files used by the tools

The input file provided to the local tester includes additional information in the following format appended to the end of the prior-information given to the solution program.

```plain
$di_1$ $dj_1$
$\vdots$
$di_M$ $dj_M$
$v_{0,0}$ $\cdots$ $v_{0,N-1}$
$\vdots$
$v_{N-1,0}$ $\cdots$ $v_{N-1,N-1}$
$e_1$
$\vdots$
$e_{2N^2}$
```

- $(di_k,dj_k)$ denotes the coordinates at which the $k$-th oil field is located. That is, the minimum $i$-coordinate of the square belonging to that oil field is $di_k$ and the minimum $j$-coordinate is $dj_k$.
- Each $v_{i,j}$ represents the oil reserves $v(i,j)$ of the square $(i,j)$.
- Each $e_k$ is a value sampled from the standard normal distribution and is used in calculating the error of the result for the $k$-th query.