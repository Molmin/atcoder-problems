## Story

                

Nihonbashi Simulator is a turn-based simulation game where you manage railway company X in the fictional country R. As a big fan of this game, your goal is to make the company highly profitable. By appropriately constructing rails and stations, you will assist the people living in country R in their commuting while developing X into the best railway company!

                

## Problem Statement

                

                    Country R is composed of sections arranged in an $N \times N$ grid. The section in the $i$-th row from the top $(0 \le i &lt; N)$, and the $j$-th column from the left $(0 \le j &lt; N)$ is denoted as $(i,j)$.
                    Each section can be either empty, rail, or station:
                    

- Empty
                            -   - Does not connect to other sections.
-   - Can be changed to a station or rail by paying a cost.
- Rail
                            -   - Connects to a maximum of two adjacent non-empty sections on the up, down, left, and right. Rails are of six types, numbered as shown in the diagram below, depending on their connections.
-   - Can be changed to a station by paying a cost.
- Station
                        -   - Connects to a maximum of four adjacent non-empty sections on the up, down, left, and right.

                

                

                    

                        
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            1
                            
                            
                            2
                            
                            
                            3
                            
                            
                            4
                            
                            
                            5
                            
                            
                            6
                            
                            
                            
                                
                                
                                
                                
                                
                                
                                
                            
                            
                                
                                
                                
                                
                                
                                
                                
                            
                            
                            
                            
                            
                            
                            
                            
                        
                        Types of rails
                    
                

                

There are $M$ people living in country R. The home of person $c$ is located at section $(i_{c,s}, j_{c,s})$, and workplace is at section $(i_{c,t}, j_{c,t})$, between which he/she commutes.
                

At the start of the game, railway company X has money of $K$, and all sections are empty. The game will proceed for $T$ turns.

                

## How the game progresses

                

Each turn consists of a construction phase followed by a collection phase.

                

### Construction phase

                

During the construction phase, one of the following actions is performed: placing a rail, placing a station, or waiting. Actions that would result in money going below zero are not allowed.
                The check for whether money is below zero is performed before the collection phase.

                

- Placing a rail: Select one empty section and change it to one of the six types of rails. Money decreases by 100.
- Placing a station: Select one empty or rail section and change it to a station. Money decreases by 5000.
- Waiting: The state of the sections and the money do not change.

                

### Collection phase

                

The people living in country R commute simultaneously. Person $c$ will use train and pay a fare to railway company X only if there exist sections $(i_p, j_p)$ and $(i_q, j_q)$ that satisfy the following conditions:
                

                    

- Sections $(i_p, j_p), (i_q, j_q)$ are stations.
- It is possible to reach section $(i_q, j_q)$ from section $(i_p, j_p)$ via zero or more connected station or rail sections.
- $| i_{c,s} - i_p| + | j_{c,s} - j_p| \leq 2$
- $| i_{c,t} - i_q| + | j_{c,t} - j_q| \leq 2$

                

                

When person $c$ uses the train, railway company X's money increases by $|i_{c,s} - i_{c,t}| + |j_{c,s} - j_{c,t}|$.

                
                

Please determine the actions to maximize the money at the end of turn $T$.

                
            
            
            
                
                    

## Scoring

                    

For each test case, the absolute score is obtained as the value of the money at the end of $T$ turns, and we compute the <font color="red">**relative score**</font> $\mathrm{round}(10^9\times \frac{\mathrm{YOUR}}{\mathrm{MAX}})$, where YOUR is your absolute score and MAX is the maximum absolute score among all competitors obtained on that test case. The score of the submission is the sum of the relative scores.
                       In test cases where MAX is $0$, the relative score for all participants who received AC will be $10^9$.
                    

                    

                        If the following invalid outputs are produced, it will be judged as WA。
                        

- Placing a rail into a station or rail section
- Placing a station into a station section
- An action that results in money being less than 0
- Invalid action with incorrect rail types or section position
- The number of actions output is not $T$

                    

                    

The final ranking will be determined by the system test with more inputs which will be run after the contest is over.
                    In both the provisional/system test, if your submission produces illegal output or exceeds the time limit for some test cases, only the score for those test cases will be zero, and your submission will be excluded from the MAX calculation for those test cases.

                    

The system test will be performed only for <font color="red">**the last submission which received a result other than CE **</font>.
                    Be careful not to make a mistake in the final submission.

                    

### Number of test cases

                    

- Provisional test: 50
- System test: 2000
                            -   - We will publish [seeds.txt](https://img.atcoder.jp/ahc043/seeds.txt) (sha256=`ed5b3f922dc3633bade3f70cc6f1dd1bb3087dba36ce26ce9d4888ce2ec7a247`) after the contest is over.

                    

### About Relative Evaluation System

                    

                        In both the provisional/system test, the standings will be calculated using only the last submission which received a result other than CE.
                        Only the last submissions are used to calculate the MAX for each test case when calculating the relative scores.
                    

                    

                        The scores shown in the standings are relative, and whenever a new submission arrives, all relative scores are recalculated.
                        On the other hand, the score for each submission shown on the submissions page is the sum of the absolute score for each test case, and the relative scores are not shown.
                        In order to know the relative score of submission other than the latest one in the current standings, you need to resubmit it.
                        If your submission produces illegal output or exceeds the time limit for some test cases, the score shown on the submissions page will be 0, but the standings show the sum of the relative scores for the test cases that were answered correctly.
                    

                    

### About execution time

                    

                        Execution time may vary slightly from run to run.
                        In addition, since system tests simultaneously perform a large number of executions, it has been observed that execution time increases by several percent compared to provisional tests.
                        For these reasons, submissions that are very close to the time limit may result in TLE in the system test.
                        Please measure the execution time in your program to terminate the process, or make sure to have enough time margin for the execution.
                    

                
            
            

            
                
                    
                        

## Input

                        

Input will be provided from Standard Input in the following format.

> \(
> 
> N ~ M ~ K ~ T\\
> 
> i_{0, s} ~ j_{0, s} ~ i_{0, t} ~ j_{0, t} \\
> 
> i_{1, s} ~ j_{1, s} ~ i_{1, t} ~ j_{1, t} \\
> 
> \vdots \\
> 
> i_{M-1, s} ~ j_{M-1, s} ~ i_{M-1, t} ~ j_{M-1, t}
> 
> \)
                        

- On the first line, there are four integers $N,M,K,T$ separated by spaces.
                                -   - $N$ represents the number of rows and columns in country R and satisfies $N = 50$.
-   - $M$ represents the number of people in country R and satisfies $50 \le M \le 1600$.
-   - $K$ represents the initial money of railway company X and satisfies $11000 \leq K \leq 20000$.
-   - $T$ represents the number of turns in the game and satisfies $T = 800$.
- The following $M$ lines provide information about the commuting of people living in country R.
                                Each line contains four space-separated integers, where the home of person $c$ is at section $(i_{c,s}, j_{c,s})$ and the workplace is at section $(i_{c, t}, j_{c,t} )$.
                                The following conditions are satisfied: $0 \leq i_{c, s}, i_{c, t} \lt N, 0 \leq j_{c, s}, j_{c, t} \lt N, | i_{c,s} - i_{c,t} | + | j_{c,s} - j_{c,t} | \gt 4 (0 \leq c \lt M)$.

                        

## Output

                        

Output $T$ lines. For the $t$-th row, output the action taken during the $t$-th construction phase in the following format:

                        

- When placing a rail
                                <br>
                                If you are constructing a rail of type $p$ at section $(i, j)$, output $p, i, j$ separated by spaces.
                                <br>
                                The types of rails are numbered according to the diagram provided in the problem statement.
- When placing a station
                                <br>
                                If you are constructing a station at section $(i, j)$, output $0, i, j$ separated by spaces.
- When waiting
                                <br>
                                Output `-1`.

                        

[show example](https://img.atcoder.jp/ahc043/de43f43a9c.html?lang=en&amp;output=sample)

                    
                
            
    
            
                
                    

## Input Generation

                    
                        Details
                            

                                Let $\mathrm{rand}(L, U)$ be a function that generates a uniform random integer between $L$ and $U$, inclusive,
                                and $\mathrm{rand\_double}(L, U)$ be a function that generates a uniform random real number greater than or equal to $L$ and less than $U$, 
                                and $\mathrm{normal}(\mu,\sigma)$ be a function that generates a random real number from a normal distribution with mean $\mu$ and standard deviation $\sigma$.
                            

                            

### Generation of $M$

                            

$M = \mathrm{round}(50 \times 2 ^{\mathrm{rand\_double}(0,5)})$

                            

### Generation of the locations of homes and workplaces

                            

                                Create a Gaussian mixture model to generate home locations as follows:<br>
                                Generate the number of clusters with $\mathrm{rand}(5,15)$.
                                For each cluster $i$, generate the weight $w_i = \mathrm{rand\_double}(0, 1)$, the center coordinates $(r_i, c_i) = (\mathrm{rand\_double}(0, N-1), \mathrm{rand\_double}(0, N-1))$, and the standard deviation $\sigma_i = \mathrm{rand\_double}(2, 15)$.
                                <br>
                                Similarly, create a Gaussian mixture model to generate workplace locations.
                            

                            

                                Repeat the following process $M$ times to generate the locations for people's homes and workplaces:
                            

                            

                                

1. Randomly select a cluster $i$ from the Gaussian mixture model for generating home locations with a probability proportional to the weight $w_i$.
2. For the selected $i$, generate the home location as $r_0 = \text{round}(\text{normal}(r_i, \sigma_i)), c_0 = \text{round}(\text{normal}(c_i, \sigma_i))$.
3. If the generated location $(r_0, c_0)$ do not satisfy $0 \leq r_0 \lt N$ or $0 \leq c_0 \lt N$, start over from step 1.
4. Similarly, generate the workplace location $(r_1, c_1)$.
5. If the Manhattan distance between the home location $(r_0, c_0)$ and the workplace location $(r_1, c_1)$ is less than or equal to $4$, start over from step 1.

                            

                            

### Generation of $K$

                            

                                For $M$ people, let the minimum Manhattan distance between their home and workplace locations be $d$.
                                $K$ is generated as $\mathrm{rand}(\mathrm{max}(10, d) \times 100, 2 \times N \times 100) + 10000$.
                            

                    
                
            
            
                
                    

## Tools (Input generator and visualizer)

                    

- [Web version](https://img.atcoder.jp/ahc043/de43f43a9c.html?lang=en): This is more powerful than the local version providing animations.
- [Local version](https://img.atcoder.jp/ahc043/de43f43a9c.zip): You need a compilation environment of [Rust language](https://www.rust-lang.org/).
                            -   - [Pre-compiled binary for Windows](https://img.atcoder.jp/ahc043/de43f43a9c_windows.zip): If you are not familiar with the Rust language environment, please use this instead.

                    

                        <font color="red">**Please be aware that sharing visualization results or discussing solutions/ideas during the contest is prohibited.**</font>
                    

                    

                        Your program may output comment lines starting with `#`.
                        The web version of the visualizer displays the comment lines with the corresponding output, which may be useful for debugging and analysis.
                        Since the judge program ignores all comment lines, you can submit a program that outputs comment lines as is.
                    

                
            
            
                
                    

## Sample Solution

                    
                        Sample implementation in Python
```plain
import sys

Pos = tuple[int, int]
EMPTY = -1
DO_NOTHING = -1
STATION = 0
RAIL_HORIZONTAL = 1
RAIL_VERTICAL = 2
RAIL_LEFT_DOWN = 3
RAIL_LEFT_UP = 4
RAIL_RIGHT_UP = 5
RAIL_RIGHT_DOWN = 6
COST_STATION = 5000
COST_RAIL = 100

class UnionFind:
    def __init__(self, n: int):
        self.n = n
        self.parents = [-1 for _ in range(n * n)]

    def _find_root(self, idx: int) -> int:
        if self.parents[idx] < 0:
            return idx
        self.parents[idx] = self._find_root(self.parents[idx])
        return self.parents[idx]

    def is_same(self, p: Pos, q: Pos) -> bool:
        p_idx = p[0] * self.n + p[1]
        q_idx = q[0] * self.n + q[1]
        return self._find_root(p_idx) == self._find_root(q_idx)

    def unite(self, p: Pos, q: Pos) -> None:
        p_idx = p[0] * self.n + p[1]
        q_idx = q[0] * self.n + q[1]
        p_root = self._find_root(p_idx)
        q_root = self._find_root(q_idx)
        if p_root != q_root:
            p_size = -self.parents[p_root]
            q_size = -self.parents[q_root]
            if p_size > q_size:
                p_root, q_root = q_root, p_root
            self.parents[q_root] += self.parents[p_root]
            self.parents[p_root] = q_root

def distance(a: Pos, b: Pos) -> int:
    return abs(a[0] - b[0]) + abs(a[1] - b[1])

class Action:
    def __init__(self, type: int, pos: Pos):
        self.type = type
        self.pos = pos

    def __str__(self):
        if self.type == DO_NOTHING:
            return "-1"
        else:
            return f"{self.type} {self.pos[0]} {self.pos[1]}"

class Result:
    def __init__(self, actions: list[Action], score: int):
        self.actions = actions
        self.score = score

    def __str__(self):
        return "\n".join(map(str, self.actions))

class Field:
    def __init__(self, N: int):
        self.N = N
        self.rail = [[EMPTY] * N for _ in range(N)]
        self.uf = UnionFind(N)

    def build(self, type: int, r: int, c: int) -> None:
        assert self.rail[r][c] != STATION
        if 1 <= type <= 6:
            assert self.rail[r][c] == EMPTY
        self.rail[r][c] = type

        # connect adjacent cells
        # top
        if type in (STATION, RAIL_VERTICAL, RAIL_LEFT_UP, RAIL_RIGHT_UP):
            if r > 0 and self.rail[r - 1][c] in (STATION, RAIL_VERTICAL, RAIL_LEFT_DOWN, RAIL_RIGHT_DOWN):
                self.uf.unite((r, c), (r - 1, c))
        # bottom
        if type in (STATION, RAIL_VERTICAL, RAIL_LEFT_DOWN, RAIL_RIGHT_DOWN):
            if r < self.N - 1 and self.rail[r + 1][c] in (STATION, RAIL_VERTICAL, RAIL_LEFT_UP, RAIL_RIGHT_UP):
                self.uf.unite((r, c), (r + 1, c))
        # left
        if type in (STATION, RAIL_HORIZONTAL, RAIL_LEFT_DOWN, RAIL_LEFT_UP):
            if c > 0 and self.rail[r][c - 1] in (STATION, RAIL_HORIZONTAL, RAIL_RIGHT_DOWN, RAIL_RIGHT_UP):
                self.uf.unite((r, c), (r, c - 1))
        # right
        if type in (STATION, RAIL_HORIZONTAL, RAIL_RIGHT_DOWN, RAIL_RIGHT_UP):
            if c < self.N - 1 and self.rail[r][c + 1] in (STATION, RAIL_HORIZONTAL, RAIL_LEFT_DOWN, RAIL_LEFT_UP):
                self.uf.unite((r, c), (r, c + 1))

    def is_connected(self, s: Pos, t: Pos) -> bool:
        assert distance(s, t) > 4  # precondition
        stations0 = self.collect_stations(s)
        stations1 = self.collect_stations(t)
        for station0 in stations0:
            for station1 in stations1:
                if self.uf.is_same(station0, station1):
                    return True
        return False

    def collect_stations(self, pos: Pos) -> list[Pos]:
        stations = []
        for dr in range(-2, 3):
            for dc in range(-2, 3):
                if abs(dr) + abs(dc) > 2:
                    continue
                r = pos[0] + dr
                c = pos[1] + dc
                if 0 <= r < self.N and 0 <= c < self.N and self.rail[r][c] == STATION:
                    stations.append((r, c))
        return stations

class Solver:
    def __init__(self, N: int, M: int, K: int, T: int, home: list[Pos], workplace: list[Pos]):
        self.N = N
        self.M = M
        self.K = K
        self.T = T
        self.home = home
        self.workplace = workplace
        self.field = Field(N)
        self.money = K
        self.actions = []

    def calc_income(self) -> int:
        income = 0
        for i in range(self.M):
            if self.field.is_connected(self.home[i], self.workplace[i]):
                income += distance(self.home[i], self.workplace[i])
        return income

    def build_rail(self, type: int, r: int, c: int) -> None:
        self.field.build(type, r, c)
        self.money -= COST_RAIL
        self.actions.append(Action(type, (r, c)))

    def build_station(self, r: int, c: int) -> None:
        self.field.build(STATION, r, c)
        self.money -= COST_STATION
        self.actions.append(Action(STATION, (r, c)))

    def build_nothing(self) -> None:
        self.actions.append(Action(DO_NOTHING, (0, 0)))

    def solve(self) -> Result:
        # find a person to connect
        rail_count = (self.K - COST_STATION * 2) // COST_RAIL
        person_idx = 0
        while person_idx < self.M:
            if distance(self.home[person_idx], self.workplace[person_idx]) - 1 <= rail_count:
                break
            person_idx += 1
        assert person_idx != self.M

        # build stations
        self.build_station(*self.home[person_idx])
        self.build_station(*self.workplace[person_idx])

        # connect stations with rails
        r0, c0 = self.home[person_idx]
        r1, c1 = self.workplace[person_idx]
        # r0 -> r1
        if r0 < r1:
            for r in range(r0 + 1, r1):
                self.build_rail(RAIL_VERTICAL, r, c0)
            if c0 < c1:
                self.build_rail(RAIL_RIGHT_UP, r1, c0)
            elif c0 > c1:
                self.build_rail(RAIL_LEFT_UP, r1, c0)
        elif r0 > r1:
            for r in range(r0 - 1, r1, -1):
                self.build_rail(RAIL_VERTICAL, r, c0)
            if c0 < c1:
                self.build_rail(RAIL_RIGHT_DOWN, r1, c0)
            elif c0 > c1:
                self.build_rail(RAIL_LEFT_DOWN, r1, c0)
        # c0 -> c1
        if c0 < c1:
            for c in range(c0 + 1, c1):
                self.build_rail(RAIL_HORIZONTAL, r1, c)
        elif c0 > c1:
            for c in range(c0 - 1, c1, -1):
                self.build_rail(RAIL_HORIZONTAL, r1, c)

        income = self.calc_income()
        self.money += income

        # do nothing for the rest of the time
        while len(self.actions) < self.T:
            self.build_nothing()
            self.money += income

        return Result(self.actions, self.money)

def main():
    N, M, K, T = map(int, input().split())
    home = []
    workplace = []
    for _ in range(M):
        r0, c0, r1, c1 = map(int, input().split())
        home.append((r0, c0))
        workplace.append((r1, c1))

    solver = Solver(N, M, K, T, home, workplace)
    result = solver.solve()
    print(result)
    print(f"score={result.score}", file=sys.stderr)

if __name__ == "__main__":
    main()
```
                    
                    

The following processes are implemented:

                    

1. Examine person $0$, $1$, $\ldots$ in order to find the first person for whom it is possible to place stations at their home and workplace locations and connect them with rails at the initial money.
2. Place stations at the identified person's home and workplace locations, and place rails to connect from home to workplace.
3. After that, wait until turn $T$.

                    

The code includes a simulation of the changes in money. You may use it as a reference when creating your solution.