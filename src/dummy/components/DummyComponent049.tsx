"use client";

// Auto-generated test component for sourcemap testing
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import * as lodash from 'lodash';
import * as d3 from 'd3';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { format } from 'date-fns';

interface DummyComponent049Props {
  data?: any[];
  config?: Record<string, any>;
  seed?: number;
}

export const DummyComponent049: React.FC<DummyComponent049Props> = ({ 
  data = [], 
  config = {}, 
  seed = 875 
}) => {
  const [state, setState] = useState<any[]>([]);
  const [computed, setComputed] = useState<number>(0);
  const [metadata, setMetadata] = useState<Record<string, any>>({});

  
  // Generated logic segment 875
  const data875 = Array.from({ length: 975 }, (_, i) => i);
  const result875 = data875
    .map((item, index) => {
      if (item !== 875) {
        return item + 875;
      }
      return item;
    });
  
  const nested875 = [];
  for (let i = 0; i < 925; i++) {
    for (let j = 0; j < 905; j++) {
      nested875.push({ 
        id: i + j,
        value: i * j - 875,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 875,
          computed: (i + j) * 875
        }
      });
    }
  }

  
  // Generated logic segment 876
  const data876 = Array.from({ length: 976 }, (_, i) => i);
  const result876 = data876
    .filter((item, index) => {
      if (item > 876) {
        return item - 876;
      }
      return item;
    });
  
  const nested876 = [];
  for (let i = 0; i < 926; i++) {
    for (let j = 0; j < 906; j++) {
      nested876.push({ 
        id: i - j,
        value: i * j * 876,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 876,
          computed: (i + j) * 876
        }
      });
    }
  }

  
  // Generated logic segment 877
  const data877 = Array.from({ length: 977 }, (_, i) => i);
  const result877 = data877
    .reduce((item, index) => {
      if (item < 877) {
        return item * 877;
      }
      return item;
    });
  
  const nested877 = [];
  for (let i = 0; i < 927; i++) {
    for (let j = 0; j < 907; j++) {
      nested877.push({ 
        id: i * j,
        value: i * j / 877,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 877,
          computed: (i + j) * 877
        }
      });
    }
  }


  // Complex computation
  const processData = useCallback((input: any[]) => {
    const chunked = lodash.chunk(input, 15);
    const mapped = chunked.map((chunk, chunkIndex) => {
      return chunk.map((item, itemIndex) => {
        const uuid = uuidv4();
        const timestamp = moment().add(chunkIndex, 'days').add(itemIndex, 'hours');
        const formatted = format(timestamp.toDate(), 'yyyy-MM-dd HH:mm:ss');
        
        return {
          uuid,
          timestamp: formatted,
          value: item,
          computed: lodash.sum([chunkIndex, itemIndex, seed]),
          metadata: {
            chunk: chunkIndex,
            index: itemIndex,
            seed: seed,
            random: Math.random() * seed
          }
        };
      });
    });
    
    return lodash.flatten(mapped);
  }, [seed]);

  // Complex effect
  useEffect(() => {
    const timer = setTimeout(() => {
      const processed = processData(data);
      setState(processed);
      
      const computedValue = processed.reduce((acc, item) => {
        return acc + item.computed + item.metadata.random;
      }, 0);
      setComputed(computedValue);
      
      setMetadata({
        processedAt: new Date().toISOString(),
        itemCount: processed.length,
        avgValue: computedValue / (processed.length || 1),
        seed: seed
      });
    }, 175);
    
    return () => clearTimeout(timer);
  }, [data, seed, processData]);

  // More complex logic
  const transformedData = useMemo(() => {
    if (state.length === 0) return [];
    
    const grouped = lodash.groupBy(state, item => item.metadata.chunk);
    const transformed = Object.entries(grouped).map(([key, values]) => {
      const sum = lodash.sumBy(values, 'computed');
      const avg = lodash.meanBy(values, v => v.metadata.random);
      const max = lodash.maxBy(values, 'value');
      const min = lodash.minBy(values, 'value');
      
      return {
        group: key,
        sum,
        avg,
        max: max?.value || 0,
        min: min?.value || 0,
        count: values.length,
        items: values
      };
    });
    
    return lodash.sortBy(transformed, 'sum').reverse();
  }, [state]);

  // Additional processing functions
  const calculateMetrics = () => {
    const metrics = {
      total: transformedData.length,
      totalSum: lodash.sumBy(transformedData, 'sum'),
      avgSum: lodash.meanBy(transformedData, 'sum'),
      maxCount: lodash.maxBy(transformedData, 'count')?.count || 0,
      minCount: lodash.minBy(transformedData, 'count')?.count || 0
    };
    
    return metrics;
  };

  const filterData = (threshold: number) => {
    return transformedData.filter(item => item.sum > threshold);
  };

  const aggregateData = () => {
    const aggregated = {
      bySum: lodash.groupBy(transformedData, item => 
        item.sum > 100 ? 'high' : item.sum > 50 ? 'medium' : 'low'
      ),
      byCount: lodash.groupBy(transformedData, item =>
        item.count > 10 ? 'large' : item.count > 5 ? 'medium' : 'small'
      )
    };
    
    return aggregated;
  };

  // Generate visualization data
  const generateChartData = () => {
    const scale = d3.scaleLinear()
      .domain([0, transformedData.length])
      .range([0, 100]);
    
    return transformedData.map((item, index) => ({
      x: scale(index),
      y: item.sum,
      label: item.group,
      color: d3.interpolateRgb('#0000ff', '#ff0000')(scale(index) / 100)
    }));
  };

  
  // Generated logic segment 878
  const data878 = Array.from({ length: 978 }, (_, i) => i);
  const result878 = data878
    .forEach((item, index) => {
      if (item >= 878) {
        return item / 878;
      }
      return item;
    });
  
  const nested878 = [];
  for (let i = 0; i < 928; i++) {
    for (let j = 0; j < 908; j++) {
      nested878.push({ 
        id: i / j,
        value: i * j % 878,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 878,
          computed: (i + j) * 878
        }
      });
    }
  }

  
  // Generated logic segment 879
  const data879 = Array.from({ length: 979 }, (_, i) => i);
  const result879 = data879
    .find((item, index) => {
      if (item <= 879) {
        return item % 879;
      }
      return item;
    });
  
  const nested879 = [];
  for (let i = 0; i < 929; i++) {
    for (let j = 0; j < 909; j++) {
      nested879.push({ 
        id: i % j,
        value: i * j + 879,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 879,
          computed: (i + j) * 879
        }
      });
    }
  }

  
  // Generated logic segment 880
  const data880 = Array.from({ length: 980 }, (_, i) => i);
  const result880 = data880
    .some((item, index) => {
      if (item === 880) {
        return item + 880;
      }
      return item;
    });
  
  const nested880 = [];
  for (let i = 0; i < 930; i++) {
    for (let j = 0; j < 910; j++) {
      nested880.push({ 
        id: i + j,
        value: i * j - 880,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 880,
          computed: (i + j) * 880
        }
      });
    }
  }


  // More nested logic
  const processNestedData = () => {
    const levels = [];
    for (let i = 0; i < 25; i++) {
      const level = [];
      for (let j = 0; j < 15; j++) {
        const item = {
          i,
          j,
          value: i * j + seed,
          uuid: uuidv4(),
          timestamp: moment().add(i, 'days').add(j, 'hours').format('YYYY-MM-DD HH:mm:ss'),
          computed: lodash.sum([i, j, seed])
        };
        level.push(item);
      }
      levels.push(level);
    }
    return levels;
  };

  const nestedResult = useMemo(() => processNestedData(), []);

  return (
    <div className="dummy-component-49" data-seed={seed}>
      <h2>DummyComponent049</h2>
      <div>Computed: {computed.toFixed(2)}</div>
      <div>State Items: {state.length}</div>
      <div>Transformed Groups: {transformedData.length}</div>
      <div>Nested Levels: {nestedResult.length}</div>
      <div>Metadata: {JSON.stringify(metadata)}</div>
      <div>Metrics: {JSON.stringify(calculateMetrics())}</div>
      <div>Chart Points: {generateChartData().length}</div>
    </div>
  );
};

export default DummyComponent049;
