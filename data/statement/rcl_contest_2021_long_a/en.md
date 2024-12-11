## Problem Statement

      

        Mr.X has a large farm, which consists of $N \times N$ squares.<br>
        We call the square at the $r$-th row from the top and at the $c$-th column from the left as the area $(r, c)$ $(0 \leq r, c＜N)$.
      

      

        $M$ vegetables will grow and die on the farm in the coming $T$ days.<br>
        The $i$-th vegetable is represented by five integers $R_{i},C_{i},S_{i},E_{i},$ and $V_{i}$.<br>
        They mean that a vegetable with the value $V_{i}$ will appear in the area $(R_{i},C_{i})$ on the $S_{i}$-th day, and disappear at the end of the $E_{i}$-th day.
      

      

        X harvests these vegetables with harvest machines.<br>
        At first, he doesn't have any harvest machines and has $1$ unit of money.
      

      

        On each of the $T$ days, X makes one of the following actions.
      

      

- **Purchase**
- -   - X gets a new harvest machine and puts it in one of the areas that doesn't have another harvest machine.
-   - When X has $j$ harvest machines, purchase costs $(j+1)^3$ units of money.
        -   -   - For example, the first purchase costs $1$ unit of money. The second purchase costs $8$ units of money, and so on.
-   - X can't purchase a machine if he doesn't have enough money.

- **Move**
        -   - X chooses a harvest machine and moves it to one of the areas where no harvest machine is located.
- **Pass**
        -   - X does nothing.

      

        After the $t$-th $(0 \leq t＜T)$ action, the following things happen in order.<br>
        

- For all i where $S_{i} = t$, vegetable $i$ appears in the area $(R_{i},C_{i})$.
- Vegetables in the areas that have a harvest machine are harvested.
            -   - For each of such vegetables, let $v$ be its value, and $k$ be the size of the 4-connected component of the areas having a harvest machine that contains the vegetable's position.
              -   -   - 4-connected component is the group of areas that are connected to each other through vertically or horizontally adjacent areas.
-   - X earns $v \times k$ units of money.
-   - This vegetable disappears.
- For all i where $E_{i} = t$, vegetable $i$ disappears from the farm if it's not yet harvested.

      

      

        Your goal is to make as much money as possible he has after the $T-1$-th day by determining actions X will take.
      

      

## Scoring

      

        The score of a test case is the amount of money X has after the $T-1$-th day.<br>
        The score of a submission is the total score for each test case.
        

- Provisional tests consist of 50 test cases. If you get a result other than `AC` for one or more test cases, the score of the submission will be zero.
- System tests consist of 1000 test cases. If you get a result other than `AC` for some test cases, only the score for those test cases will be zero.<br>
Since there will be some variance in the execution time, submissions that are very close to the time limit may result in `TLE` in the system test.
Please measure the execution time in your program to terminate the process, or have enough margin in the execution time.
          We will publish [seeds.txt](https://img.atcoder.jp/rcl-contest-2021-long/seeds.zip) (md5=75031719692fe939fb105e7af16e31c8) after the contest is over.

      

    

  
    
      
        

## Input

        

          Input is given from standard input in the following format.<br>
          The first line consists of the three integers $N,M,T$ separated by a space. Each of the next $M$ lines consists of the five integers separated by a space.
        

        > $N$ $M$ $T$
> 
> $R_{0}$ $C_{0}$ $S_{0}$ $E_{0}$ $V_{0}$
> 
> \(\vdots\)
> 
> $R_{i}$ $C_{i}$ $S_{i}$ $E_{i}$ $V_{i}$
> 
> \(\vdots\)
> 
> $R_{M-1}$ $C_{M-1}$ $S_{M-1}$ $E_{M-1}$ $V_{M-1}$
        

- $N$ is an integer that represents the size of the farm and satisfies $N=16$.
- $M$ is an integer that represents the number of the vegetables and satisfies $M=5000$.
- $T$ is an integer that represents the number of days and satisfies $T=1000$.
- $R_{i}$ and $C_{i}$ are integers that represent the area in which $i$-th vegetable appears, and satisfy $0 \leq R_{i}＜N$, $0 \leq C_{i}＜N$.
- $S_{i}$ is an integer that represents the day which $i$-th vegetable appears on, and satisfies $S_{i} \leq S_{i+1},0 \leq S_{i}＜T$.
- $E_{i}$ is an integer that represents the day which $i$-th vegetable disappears on, and satisfies $S_{i} \leq E_{i}＜T$.
- $V_{i}$ is an integer that represents the value of the $i$-th vegetable. See the "test case generation" section below about the details.
- If $(R_i, C_i)=(R_j, C_j) (i＜j)$, then $E_i＜S_j$. That is, the lifetimes of the vegetables that appear in the same area don't overlap.

      
    
    
      
        

## Output

        

          Output $T$lines.<br>
          $i$-th line represents X's $i$-th action.
        

        

- For making a **purchase**, output two integers separated by a space.
- -   - To put the purchased harvest machine in the area $(r_{1},c_{1})$, output $r_{1} c_{1}$.

- For doing a **move**, output two integers separated by a space.
- -   - To move a harvest machine from the area $(r_{1},c_{1})$ to the area $(r_{2},c_{2})$, output $r_{1} c_{1} r_{2} c_{2}$.
-   - $(r_{1},c_{1})$ may be the same as $(r_{2},c_{2})$.

- For doing **pass**, output $-1$.

      
    
    
      
        

## Test case generaton

        

          Each vegetable is generated as follows.<br>
          All random selection is uniformly at random.<br>
          For the exact details, see the source code of the test case generator.
        

        

- $l_{i}$ is selected from the integers between $0$ and $20$, inclusive.
- $S_{i}$ is selected from the integers between $0$ and $T-1-l_{i}$, inclusive.
- $E_{i}$ is $S_{i} + l_{i}$.
- $v_{i}$ is selected from the floating point numbers greater than or equal to $0.0$ and less than or equal to $1.0+S_{i}/100.0$.
- $V_{i}$ is $\text{floor}(2^{v_{i}})$.
            -   - $\text{floor}(x)$ means the largest integer not greater than $x$.
- $R_{i}$ and $C_{i}$ are selected independently from the integers between $0$ and $N-1$, inclusive.
- If any of the already generated vegetables has the same $(R_{i},C_{i})$ as the newly generated one and its lifetime overlaps with the newly generated one, the generation is executed again on this vegetable.

        

Generated $M$ vegetables are sorted lexicographically by the tuples $(S_{i},R_{i},C_{i})$.

      
    
  
  
  
    
      

## Sample Input

      ```plain
9 4 10
3 3 1 5 35
4 4 4 6 22
8 8 7 9 20
2 3 8 9 10
```
      

Notice: This input is for the explanation purpose and doesn't conform to the constraint.

    
  
  
    
      

## Sample Output

      ```plain
3 3
-1
2 3
3 4
2 3 4 4
3 3 7 8
4 4 7 7
3 4 8 7
8 8
-1
```

  
    
      Output
      Explanation
      Harvest Machines Placement
      Change of Money
    
  
  
  
    
```plain
3 3
```
    
    
    X purchases a harvest machine with $1$ unit of money, and places it to the area $(3,3)$.
    
    
```plain
---------
---------
---------
---o-----
---------
---------
---------
---------
---------
```
    
    
```plain
1 -> 0
```
    
  

  
    
```plain
-1
```
    
    
    X does nothing.
    A vegetable appears in the area $(3,3)$ and is harvested.
    X earns $35 \times 1 = 35$ units of money.
    
    
```plain
---------
---------
---------
---o-----
---------
---------
---------
---------
---------
```
    
  
```plain
0 -> 35
```

  

  
    
```plain
2 3
```
    
    
    X purchases a harvest machine with $8$ units of money, and places it to the area $(2,3)$.
    
    
```plain
---------
---------
---o-----
---o-----
---------
---------
---------
---------
---------
```
    
  
```plain
35 -> 27
```

  

  
    
```plain
3 4
```
    
    
    X purchases a harvest machine with $27$ units of money, and places it to the area $(3,4)$.
    
    
```plain
---------
---------
---o-----
---oo----
---------
---------
---------
---------
---------
```
    
  
```plain
27 -> 0
```

  

  
    
```plain
2 3 4 4
```
    
    
    X moves a harvest machine located on $(2,3)$ to the area $(4,4)$.
    After that, a vegetable appears in the area $(4,4)$ and is harvested.
    X earns $22 \times 3 = 66$ units of money.
    
    
```plain
---------
---------
---------
---oo----
----o----
---------
---------
---------
---------
```
    
  
```plain
0 -> 66
```

  

  
    
```plain
3 3 7 8
```
    
    
    X moves a harvest machine located on $(3,3)$ to the area $(7,8)$.
    
    
```plain
---------
---------
---------
----o----
----o----
---------
---------
--------o
---------
```
    
  
```plain
66 -> 66
```

  

  
    
```plain
4 4 7 7
```
    
    
    X moves a harvest machine located on $(4,4)$ to the area $(7,7)$.
    
    
```plain
---------
---------
---------
----o----
---------
---------
---------
-------oo
---------
```
    
  
```plain
66 -> 66
```

  

  
    
```plain
3 4 8 7
```
    
    
    X moves a harvest machine located on $(3,4)$ to the area $(8,7)$.
    
    
```plain
---------
---------
---------
---------
---------
---------
---------
-------oo
-------o-
```
    
  
```plain
66 -> 66
```

  

  
    
```plain
8 8
```
    
    
    X purchases a harvest machine with $64$ units of money, and places it to the area $(8,8)$.
    After that, a vegetable in the area $(8,8)$ is harvested.
    X earns $20 \times 4 = 80$ units of money.
    
    
```plain
---------
---------
---------
---------
---------
---------
---------
-------oo
-------oo
```
    
  
```plain
66 -> 82
```

  

  
    
```plain
-1
```
    
    
      X does nothing.
      A vegetable in the area $(2,3)$ disappears.
    
    
```plain
---------
---------
---------
---------
---------
---------
---------
-------oo
-------oo
```
    
  
```plain
82 -> 82
```
    
  

  

    

      The score obtained from this output is $82$.
    

  

  
    
      

## Tools

      

We provide the tools for contestants. It contains test case generator, output verifier, sample input data, solution visualizer, and sample solutions (C++, Python).

      

[contestant tools(zip)](https://img.atcoder.jp/rcl-contest-2021-long/9ee3ca1da522fff7e369dd7f470f1e7a.zip)

    
  
  
  
    
      

## Visualizer

      

- This visualizer is tested on the latest desktop version of [Google Chrome](https://www.google.com/chrome/) and [Mozilla Firefox](https://www.mozilla.org/firefox/new/). We don't guarantee that it works on every browser.
- The score calculated on this visualizer is not the actual score of the contest. Submit your solution on the AtCoder contest page to enter the contest.
- Use this visualizer at your own risk.

      

This visualizer is also contained in the contestant tools.