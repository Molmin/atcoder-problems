## Story

You have been hired as a project leader of F Corporation. Your job is to assign tasks to team members appropriately.
The current project consists of a number of tasks.
The expected number of days for a team member to complete a task depends on skill levels of the team member and required skill levels for the task.
You are highly experienced and can accurately estimate the required skill levels for each task, but since you have just joined the team, you do not yet know the skill levels of each team member at all.
Please assign tasks appropriately while gradually evaluating the skill levels of team members.

## Problem Statement

You want to assign $N$ tasks to $M$ team members.
You can assign each task to at most one team member, and once you assign a task to a team member, you cannot assign another task to him/her until he/she completes the task.
There are $K$ types of skills.
Each team member $j$ has a non-negative integer vector $\bm{s_j} = (s_{j,1},\cdots,s_{j,K})$ representing skill levels, and each task $i$ has a non-negative integer vector $\bm{d_i} = (d_{i,1},\cdots,d_{i,K})$ representing required skill levels.
Among these, the skill levels $\bm{s_1},\cdots,\bm{s_M}$ are not given as input.

We define $w_{i,j}:=\sum_{k=1}^K \max(0,d_{i,k}-s_{j,k})$.
Then, it takes $t_{i,j}$ days for team member $j$ to complete task $i$, where $t_{i,j}$ is defined as follows.

1. If $w_{i,j}=0$, $t_{i,j}=1$.
2. If $w_{i,j} &gt; 0$, $t_{i,j}=\max(1,w_{i,j}+r_i)$, where $r_i$ is a uniform random integer between $-3$ and $3$, inclusive.

When a task taking $t$ days is started on day $d$, the task will be completed at the end of day $d+t-1$.
There are dependencies between tasks, and before starting a task, all of its dependent tasks must have been completed by the end of the previous day.
Please complete all tasks in as few days as possible.

## Input and Output

For the range of each input value, see Input Generation.

At the start of the execution, the number of tasks $N$, the number of team members $M$, the number of skills $K$, the number of dependencies $R$, required skill levels for each task $\bm{d_1},\cdots,\bm{d_N}$, and a list of pairs of dependent tasks $(u_1,v_1),\cdots,(u_R,v_R)$ are given from Standard Input in the following format.

```plain
$N$ $M$ $K$ $R$
$d_{1,1}$ $\cdots$ $d_{1,K}$
$\vdots$
$d_{N,1}$ $\cdots$ $d_{N,K}$
$u_1$ $v_1$
$\vdots$
$u_R$ $v_R$
```

$(u_i,v_i)$ indicates that the task $v_i$ ($1\leq v_i\leq N$) depends on the task $u_i$ ($1\leq u_i\leq N$) and that $u_i$ must be completed before starting $v_i$.
It satisfies $u_i&lt;v_i$, and the same $(u_i,v_i)$ pair appears at most once in the input.

Then, starting from day 1, do the following two processes every day.

First, output to Standard Output a list of pairs $(a_1,b_1),\cdots,(a_m,b_m)$ such that team member $a_i$ ($1\leq a_i\leq M$) starts task $b_i$ ($1\leq b_i\leq N$) on that day in one line in the following format.

```plain
$m$ $a_1$ $b_1$ $\cdots$ $a_m$ $b_m$
```

<font color="red">**After the output, you have to flush Standard Output.**</font> Otherwise, the submission might be judged as TLE .

Next, a list of team members who have completed their tasks at the end of that day $f_1,\cdots,f_n$ ($1\leq f_1&lt;\cdots&lt;f_n\leq M$) is given in one line from Standard Input in the following format.

```plain
$n$ $f_1$ $\cdots$ $f_n$
```

If all tasks are completed or day $2000$ is over, a line containing only `-1` will be given as input instead of the above input, and you should exit the program.

## Example

Day
Output
Input

Prior information

```plain
3 2 2 1
0 1
2 0
1 1
2 3
```

Day 1
```plain
2 1 1 2 2
```
```plain
1 1
```

Day 2
```plain
0
```
```plain
1 2
```

Day 3
```plain
1 1 3
```
```plain
0
```

Day 4
```plain
0
```
```plain
0
```

Day 5
```plain
0
```
```plain
-1
```

## Scoring

If you complete all the tasks at the end of day $D$ ($1\leq D\leq 2000$), you will get a score of $N+2000-D$.
If you fail to complete all the tasks within $2000$ days, you will get a score of $T$, where $T(&lt;N)$ is the total number of completed tasks.

### Number of test cases

- Provisional test: 50
- System test: 3000. We will publish [seeds.txt](https://img.atcoder.jp/future-contest-2022-qual/seeds.txt) (md5=a90d2e3883a546dfb66a4215b8d7a995) after the contest is over.

The score of a submission is the total scores for each test case.
In the provisional test, if your submission produces illegal output or exceeds the time limit for some test cases, the submission itself will be judged as WA or TLE , and the score of the submission will be zero.
In the system test, if your submission produces illegal output or exceeds the time limit for some test cases, only the score for those test cases will be zero.
Note that if your program terminates abnormally, it may be judged as WA instead of RE.

### About execution time

Execution time may vary slightly from run to run.
In addition, since system tests simultaneously perform a large number of executions, it has been observed that execution time increases by several percent compared to provisional tests.
For these reasons, submissions that are very close to the time limit may result in TLE in the system test.
Please measure the execution time in your program to terminate the process, or have enough margin in the execution time.

## Input Generation

Let $\mathrm{randint}(L, U)$ be a function that generates a uniform random integer between $L$ and $U$, inclusive.
Let $\mathrm{randdouble}(L,U)$ be a function that generates a uniform random floating point number between $L$ and $U$.
Let $\mathrm{randnormal}()$ be a function that generates a random value from [the standard normal distribution](https://en.wikipedia.org/wiki/Normal_distribution#Standard_normal_distribution).

### Generation of $N$, $M$, $K$, and $R$

- $N=1000$ (fixed for all test cases)
- $M=20$ (fixed for all test cases)
- $K=\mathrm{randint}(10, 20)$
- $R=\mathrm{randint}(1000, 3000)$

### Generation of $d_{i,j}$

For each $i=1,\cdots,N$, we generate $\bm{d_i} = (d_{i,1},\cdots,d_{i,K})$ as follows.

We generate $K$-dimensional vector $(d_{i,1}',\cdots,d_{i,K}')$ by generating $d_{i,j}'=|\mathrm{randnormal}()|$.
Let $p_i=\frac{\mathrm{randdouble}(10,40)}{\sqrt{\sum_{j=1}^K d_{i,j}'^2}}$.
Then, we set $d_{i,j}=\mathrm{round}(p_i d'_{i,j})$.

### Generation of $s_{i,j}$

For each $i=1,\cdots,M$, we generate $\bm{s_i} = (s_{i,1},\cdots,s_{i,K})$ as follows.

We generate $K$-dimensional vector $(s_{i,1}',\cdots,s_{i,K}')$ by generating $s_{i,j}'=|\mathrm{randnormal}()|$.
Let $q_i=\frac{\mathrm{randdouble}(20,60)}{\sqrt{\sum_{j=1}^K s_{i,j}'^2}}$.
Then, we set $s_{i,j}=\mathrm{round}(q_i s'_{i,j})$.

### Generation of $(u_i,v_i)$

Starting from an empty set $E=\emptyset$, we generate a set of dependent task pairs $E=\{(u_1,v_1),\cdots,(u_R,v_R)\}$ by repeating the following process until $|E|=R$.

Generate $h=\mathrm{randint}(1,100)$ and $v=\mathrm{randint}(h+1,N)$.
Let $u=v-h$ and insert $(u,v)$ into $E$.

## Tools

- [Local Tester](https://img.atcoder.jp/future-contest-2022-qual/f4ca7c3336de23e5c8d1338981e38375.zip): You need a compilation environment of [Rust language](https://www.rust-lang.org/).
- [Visualizer on the web](https://img.atcoder.jp/future-contest-2022-qual/f4ca7c3336de23e5c8d1338981e38375_en.html)

### Specification of input/output files used by the tools

These tools use an input file of the following format that contains, in addition to the prior information, the hidden information: skill level $\bm{s_i}$ and the number of days $t_{i,j}$ it actually takes for team member $j$ to complete task $i$.

```plain
$N$ $M$ $K$ $R$
$d_{1,1}$ $\cdots$ $d_{1,K}$
$\vdots$
$d_{N,1}$ $\cdots$ $d_{N,K}$
$u_1$ $v_1$
$\vdots$
$u_R$ $v_R$
$s_{1,1}$ $\cdots$ $s_{1,K}$
$\vdots$
$s_{M,1}$ $\cdots$ $s_{M,K}$
$t_{1,1}$ $\cdots$ $t_{1,M}$
$\vdots$
$t_{N,1}$ $\cdots$ $t_{N,M}$
```

With this information, instead of using the provided tester, you can implement your own tester that is equivalent to the provided one.

In outputs of your program, lines starting with `#` are ignored as comments.
In particular, lines starting with `#s` are interpreted as predictions of skill levels described in the following format, and are used for visualization.

```plain
#s $i$ $s_{i,1}$ $\cdots$ $s_{i,K}$
```
Predictions can be output as many times as you like, and predictions for the same $i$ will be overwritten.
The visualizer on the web provides an animation of the predictions.

For example, by inserting comment lines in the output shown in Example as follows, you can update the prediction of $s_1$ to $(0, 1)$ on day 1, and the prediction of $s_2$ to $(1, 0)$ on day 2.

```plain
2 1 1 2 2
#s 1 0 1
0
#s 2 1 0
1 1 3
0
0
```

Comment lines are also ignored in the judge, so you can submit the same program.

## Sample Program(Python)

```plain
`# assign random tasks to team member 1.
import sys
import random
# Prior information
n, m, d, r = list(map(int, input().split()))
task_difficulty = []
for i in range(n):
    task_difficulty.append(list(map(int, input().split())))
task_dependency = [[] for _ in range(n)]
for i in range(r):
    temp = list(map(int, input().split()))
    task_dependency[temp[1] - 1].append(temp[0] - 1)
# -1: not started
#  0: started
#  1: completed
task_status = [-1] * n
# -1: not assigned
#  k: assigned task k (1 &lt;= k &lt;= N)
member_status = -1
day = 0
while True:
    day += 1
    output = [0]
    # random search for tasks
    if member_status &lt; 0:
        tasklist = list(range(n))
        random.shuffle(tasklist)
        for task in tasklist:
            if task_status[task] != -1:
                continue
            ok = True
            for necessary in task_dependency[task]:
                if task_status[necessary] != 1:
                    # the dependent tasks have not been completed
                    ok = False
                    break
            if ok:
                # assign the task to team member 1
                task_status[task] = 0
                member_status = task
                output = [1, 1, task + 1]
                break
    str_output = map(str, output)
    print(" ".join(str_output))
    # After the output, you have to flush Standard Output
    sys.stdout.flush()
    temp = list(map(int, input().split()))
    if len(temp) == 1:
        if temp[0] == -1:
            # elapsed days == 2000, or all the tasks have been completed
            exit()
        else:
            # no change in state
            pass
    else:
        # one task has been completed
        task = member_status
        task_status[task] = 1
        member_status = -1
`
```